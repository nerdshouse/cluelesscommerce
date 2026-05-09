export type HubId =
  | '360-full-stack'
  | 'global-expansion'
  | 'retention'
  | 'personal-branding';

export interface ProblemCard {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceBlock {
  name: string;
  subtext: string;
  tags: string[];
}

export interface HubContent {
  id: HubId;
  label: string;
  shortLabel: string;
  tagline: string;
  accentColor: string;
  cardGradient: string;
  problemGrid: ProblemCard[];
  servicesGrid: ServiceBlock[];
}

export interface CaseStudy {
  client: string;
  metric: string;
  result: string;
  description: string;
}

export interface StaticContent {
  banner: {
    headline: string;
    subtext: string;
    cta: string;
  };
  whyClueless: {
    headline: string;
    subtext: string;
    points: { title: string; description: string }[];
  };
  caseStudies: CaseStudy[];
}

export interface ContentData {
  hubs: Record<HubId, HubContent>;
  static: StaticContent;
}
