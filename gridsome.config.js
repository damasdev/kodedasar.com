// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "kodedasar.com",
  siteUrl: "https://kodedasar.com",
  siteDescription: "Built By Developer, For Developer",

  templates: {
    Post: "/blog/:path",
    Tag: "/tag/:id",
  },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        baseDir: "./content/artikel",
        pathPrefix: "/",
        path: "*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/blog/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
          "/": {
            changefreq: "monthly",
            priority: 0.7,
          },
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-116905483-1",
      },
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false,
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs", "remark-toc"],
    },
  },
};
