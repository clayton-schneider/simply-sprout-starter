interface NavigationLink {
  link: string;
  linkText: string;
}

interface WebImage {
  altText: string;
  source: string;
}
export interface Navigation extends Array<NavigationLink> {}

type Section_Types = "hero" | "blog";
// Sections Typings
interface HeroSection {
  _type: string;
  key: string;
  id: string;
  sectionTitle: string;
  subheadline: string;
  body: object[];
  image: WebImage;
  cta: NavigationLink;
}

interface BlogSection {
  _type: string;
  key: string;
  id: string;
  sectionTitle: string;
}

export type Sections =
  | FunctionComponent<HeroSection>
  | FunctionComponent<BlogSection>;
