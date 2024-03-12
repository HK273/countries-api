export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Where in the world?",
  description: "Site that shows countries data",
  // We can just keep adding objects to this which are looped over in main-nav.ts - nice!
  mainNav: [{}],
  links: {
    github: "https://github.com/HK273/countries-api",
  },
};
