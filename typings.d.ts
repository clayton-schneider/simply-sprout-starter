interface NavigationLink {
  link: string;
  linkText: string;
}

export interface Navigation extends Array<NavigationLink> {}
