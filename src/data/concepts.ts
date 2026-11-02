export type ConceptStatus = 'Planned' | 'In Development' | 'Available' | 'Selected';
export interface Concept {
  id: string; number: string; name: string; status: ConceptStatus;
  href: string | null; description: string; traits: string[];
  navigation: string; hero: string; services: string; portfolio: string;
  interaction: string; mobile: string; reference: string;
}
// href means a reviewable route exists, NOT that the full concept is complete.
export const concepts: Concept[] = [
  {
    "id": "concept-01",
    "number": "01",
    "name": "Modern Corporate",
    "status": "In Development",
    "href": "/concept-01/",
    "description": "Clarity, confidence and a considered first impression.",
    "traits": [
      "Structured navigation",
      "Split introductory hero"
    ],
    "navigation": "Structured navigation",
    "hero": "Split introductory hero",
    "services": "Refined service grid",
    "portfolio": "Structured case studies",
    "interaction": "Restrained transitions",
    "mobile": "Stacked content; responsive navigation",
    "reference": "https://www.wix.com/website-template/view/html/4976"
  },
  {
    "id": "concept-02",
    "number": "02",
    "name": "Digital Growth",
    "status": "Planned",
    "href": null,
    "description": "A campaign-led expression of digital ambition.",
    "traits": [
      "Compact navigation",
      "Dynamic typography"
    ],
    "navigation": "Compact navigation",
    "hero": "Dynamic typography",
    "services": "Campaign-led sections",
    "portfolio": "Distinctive project cards",
    "interaction": "Modern transitions",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5566"
  },
  {
    "id": "concept-03",
    "number": "03",
    "name": "Premium Agency",
    "status": "Planned",
    "href": null,
    "description": "Editorial space with a quietly premium presence.",
    "traits": [
      "Sophisticated navigation",
      "Editorial introduction"
    ],
    "navigation": "Sophisticated navigation",
    "hero": "Editorial introduction",
    "services": "Spacious service stories",
    "portfolio": "Large project showcases",
    "interaction": "Refined reveals",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5090"
  },
  {
    "id": "concept-04",
    "number": "04",
    "name": "Creative Studio",
    "status": "Planned",
    "href": null,
    "description": "Expressive composition with a creative point of view.",
    "traits": [
      "Exploratory navigation",
      "Asymmetric composition"
    ],
    "navigation": "Exploratory navigation",
    "hero": "Asymmetric composition",
    "services": "Offset service sections",
    "portfolio": "Creative project mosaic",
    "interaction": "Interactive details",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/wh-1367"
  },
  {
    "id": "concept-05",
    "number": "05",
    "name": "Elegant Minimal",
    "status": "Planned",
    "href": null,
    "description": "A calm, focused direction with room to breathe.",
    "traits": [
      "Minimal navigation",
      "Quiet typographic hero"
    ],
    "navigation": "Minimal navigation",
    "hero": "Quiet typographic hero",
    "services": "Concise service descriptions",
    "portfolio": "Clean portfolio grid",
    "interaction": "Subtle motion",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/4957"
  },
  {
    "id": "concept-06",
    "number": "06",
    "name": "Architectural Precision",
    "status": "Planned",
    "href": null,
    "description": "A deliberate grid. An exacting visual rhythm.",
    "traits": [
      "Aligned navigation",
      "Geometric composition"
    ],
    "navigation": "Aligned navigation",
    "hero": "Geometric composition",
    "services": "Structured service grid",
    "portfolio": "Full-width project imagery",
    "interaction": "Measured transitions",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5465"
  },
  {
    "id": "concept-07",
    "number": "07",
    "name": "Monochrome Creative",
    "status": "Planned",
    "href": null,
    "description": "Bold editorial type, reduced to the essentials.",
    "traits": [
      "Editorial navigation",
      "Typography-led hero"
    ],
    "navigation": "Editorial navigation",
    "hero": "Typography-led hero",
    "services": "Clear service hierarchy",
    "portfolio": "Editorial project rhythm",
    "interaction": "Minimal motion",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5446"
  },
  {
    "id": "concept-08",
    "number": "08",
    "name": "Fresh Digital",
    "status": "Planned",
    "href": null,
    "description": "An open, contemporary and approachable experience.",
    "traits": [
      "Accessible navigation",
      "Light-blue open hero"
    ],
    "navigation": "Accessible navigation",
    "hero": "Light-blue open hero",
    "services": "Modern service cards",
    "portfolio": "Airy project cards",
    "interaction": "Gentle transitions",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5482"
  },
  {
    "id": "concept-09",
    "number": "09",
    "name": "Bold Innovation",
    "status": "Planned",
    "href": null,
    "description": "A strong visual statement built around original thinking.",
    "traits": [
      "Bold navigation",
      "Oversized statement"
    ],
    "navigation": "Bold navigation",
    "hero": "Oversized statement",
    "services": "Dynamic service sequence",
    "portfolio": "High-impact imagery",
    "interaction": "Controlled movement",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/5712"
  },
  {
    "id": "concept-10",
    "number": "10",
    "name": "Dynamic Performance",
    "status": "Planned",
    "href": null,
    "description": "A direct, energetic path from interest to action.",
    "traits": [
      "Action-led navigation",
      "Energetic introduction"
    ],
    "navigation": "Action-led navigation",
    "hero": "Energetic introduction",
    "services": "Conversion-led sequence",
    "portfolio": "Prominent project stories",
    "interaction": "Purposeful transitions",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/wh-1057"
  },
  {
    "id": "concept-11",
    "number": "11",
    "name": "Polished Professional",
    "status": "Planned",
    "href": null,
    "description": "Balanced, polished and confident at every touchpoint.",
    "traits": [
      "Refined navigation",
      "Balanced composition"
    ],
    "navigation": "Refined navigation",
    "hero": "Balanced composition",
    "services": "Premium service presentation",
    "portfolio": "Clear portfolio navigation",
    "interaction": "Smooth interactions",
    "mobile": "Planned; not implemented",
    "reference": "https://www.wix.com/website-template/view/html/wh-1221"
  }
];
