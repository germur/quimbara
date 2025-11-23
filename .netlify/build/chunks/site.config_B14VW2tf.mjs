const theme = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: "Quimbara",
  /** Will be used in index page & copyright declaration */
  author: "Quimbara",
  /** Description metadata for your website. Can be used in page metadata. */
  description: "El referente en español para MMA, UFC y Boxeo.",
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: "/favicon/favicon.ico",
  /** Specify the default language for this site. */
  locale: {
    lang: "es-ES",
    attrs: "es_ES",
    // Date locale
    dateLocale: "es-ES",
    dateOptions: {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: "src/assets/avatar.png",
    alt: "Quimbara Logo"
  },
  // === Global configuration ===
  titleDelimiter: "•",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",
  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],
  /** Configure the header of your site. */
  header: {
    menu: [
      { title: "Noticias", link: "/blog/category/noticias-eventos" },
      { title: "Análisis", link: "/blog/category/analisis-peleas" },
      { title: "Perfiles", link: "/blog/category/perfiles-luchadores" },
      { title: "Guías", link: "/blog/category/guias-principiantes" },
      { title: "Cultura", link: "/blog/category/cultura-mma" },
      { title: "Sobre Nosotros", link: "/about" }
    ]
  },
  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${(/* @__PURE__ */ new Date()).getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      {
        title: "Instagram",
        link: "https://instagram.com/quimbara",
        style: "text-sm"
      },
      {
        title: "Twitter",
        link: "https://twitter.com/quimbara",
        style: "text-sm"
      },
      {
        title: "YouTube",
        link: "https://youtube.com/quimbara",
        style: "text-sm"
      }
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: {
      github: "https://github.com/cworld1/astro-theme-pure"
      // Add other social links here if supported by the theme's icon set
    }
  },
  content: {
    /** External links configuration */
    externalLinks: {
      content: " ↗",
      /** Properties for the external links element */
      properties: {
        style: "user-select:none"
      }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    // Currently support weibo, x, bluesky
    share: ["x", "bluesky"]
  }
};
const integ = {
  // UnoCSS typography
  // See: https://unocss.dev/presets/typography
  typography: {
    class: "prose text-base"},
  // Comment system
  waline: {
    // Server service link
    server: "https://astro-theme-pure-waline.arthals.ink/"}
};
const terms = {
  title: "Terms content",
  list: [
    {
      title: "Privacy Policy",
      link: "/terms/privacy-policy"
    },
    {
      title: "Terms and Conditions",
      link: "/terms/terms-and-conditions"
    },
    {
      title: "Copyright",
      link: "/terms/copyright"
    },
    {
      title: "Disclaimer",
      link: "/terms/disclaimer"
    }
  ]
};
const config = { ...theme, integ };

export { config as c, integ as i, terms as t };
