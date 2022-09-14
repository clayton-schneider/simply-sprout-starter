export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "sections",
      title: "Page Builder",
      type: "array",
      of: [{ type: "hero" }],
    },
  ],
};
