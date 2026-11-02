import { test, expect } from '@playwright/test';
const routes=['/', '/compare/', '/concept-01/', '/concept-01/services/', '/concept-01/about/', '/concept-01/work/', '/concept-01/contact/'];
for(const width of [320,390,768,1024,1440]) {
  test(`routes, noindex and responsive bounds at ${width}px`,async({page},testInfo)=>{
    await page.setViewportSize({width,height:900});
    const errors:string[]=[];
    page.on('pageerror', error=>errors.push(error.message));
    for(const route of routes) {
      const response=await page.goto(route);
      expect(response?.status(),route).toBe(200);
      await expect(page.locator('meta[name=robots]')).toHaveAttribute('content',/noindex/);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth),route).toBe(true);
      if(route==='/') {
        await expect(page.locator('.concept-card')).toHaveCount(11);
        await page.screenshot({path:testInfo.outputPath('gallery.png'),fullPage:true});
      }
      if(route==='/concept-01/') {
        await page.screenshot({path:testInfo.outputPath('concept-01.png'),fullPage:true});
        await page.getByText('Explore designs',{exact:false}).click();
        await expect(page.getByRole('navigation',{name:'Choose a concept'})).toBeVisible();
        expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
      }
    }
    expect(errors).toEqual([]);
  });
}
test('comparison selection, preference persistence and clearing',async({page})=>{
  await page.goto('/');
  const compare=page.getByRole('button',{name:'Compare directions'});
  await expect(compare).toBeDisabled();
  await page.getByRole('checkbox',{name:'Compare Modern Corporate',exact:true}).check();
  await expect(compare).toBeDisabled();
  await page.getByRole('checkbox',{name:'Compare Premium Agency',exact:true}).check();
  await compare.click();
  await expect(page.locator('.comparison-panel:visible')).toHaveCount(2);
  const modern=page.locator('[data-concept="concept-01"]');
  await modern.getByRole('button',{name:'Prefer this direction'}).click();
  await page.reload();
  await expect(modern.getByRole('button',{name:'Preferred direction'})).toHaveAttribute('aria-pressed','true');
  await page.getByRole('button',{name:'Clear preference'}).click();
  await expect(modern.getByRole('button',{name:'Prefer this direction'})).toHaveAttribute('aria-pressed','false');
});
test('keyboard switcher exposes only reviewable routes and restores focus',async({page})=>{
  await page.goto('/concept-01/');
  const summary=page.locator('.switcher summary');
  await summary.focus(); await page.keyboard.press('Enter');
  const nav=page.getByRole('navigation',{name:'Choose a concept'});
  await expect(nav).toBeVisible();
  await expect(nav.locator('li a')).toHaveCount(1);
  await expect(nav.locator('li > span')).toHaveCount(10);
  await page.keyboard.press('Escape');
  await expect(nav).not.toBeVisible(); await expect(summary).toBeFocused();
});
test('demo contact performs no submission or outbound requests',async({page})=>{
  await page.goto('/concept-01/contact/');
  const requests:string[]=[];
  page.on('request',r=>requests.push(`${r.method()} ${r.url()}`));
  await page.getByLabel('What would you like to explore?').selectOption('website');
  await page.getByRole('button',{name:'Preview next step'}).click();
  await expect(page.getByRole('status')).toContainText('Nothing has been submitted');
  await expect(page.locator('input,textarea,form')).toHaveCount(0);
  expect(requests).toEqual([]);
});
test('unknown and planned routes return a real 404',async({page})=>{
  for(const route of ['/does-not-exist/','/concept-02/']) {
    expect((await page.goto(route))?.status()).toBe(404);
    await expect(page.getByRole('link',{name:'Back to the gallery'})).toBeVisible();
  }
});
test('core content remains usable without JavaScript',async({browser,baseURL})=>{
  const context=await browser.newContext({javaScriptEnabled:false});
  const page=await context.newPage();
  await page.goto(baseURL+'/');
  await expect(page.locator('.concept-card')).toHaveCount(11);
  await page.getByRole('link',{name:'Review foundation',exact:false}).click();
  await expect(page.getByRole('navigation',{name:'Modern Corporate navigation'})).toBeVisible();
  await context.close();
});
test('storage restrictions and malformed comparison parameters are handled',async({page})=>{
  await page.addInitScript(()=>Object.defineProperty(window,'sessionStorage',{get(){throw new Error('Disabled');}}));
  await page.goto('/compare/?concept=invalid&concept=concept-01&concept=concept-03');
  await expect(page.locator('.comparison-panel:visible')).toHaveCount(2);
  await page.locator('[data-prefer="concept-01"]').click();
  await expect(page.getByRole('status')).toContainText('only while this page is open');
});
test('reduced motion disables card movement transitions',async({page})=>{
  await page.emulateMedia({reducedMotion:'reduce'}); await page.goto('/');
  expect(await page.locator('.concept-card').first().evaluate(el=>getComputedStyle(el).transitionDuration)).toBe('0s');
});

test('Cloudflare serves noindex and security response headers',async({request,baseURL})=>{
  test.skip(!baseURL?.endsWith(':8787'),'Requires Cloudflare local runtime, not the Astro fallback server.');
  const response=await request.get('/');
  expect(response.headers()['x-robots-tag']).toContain('noindex');
  expect(response.headers()['x-content-type-options']).toBe('nosniff');
  expect(response.headers()['content-security-policy']).toContain("form-action 'self'");
});
