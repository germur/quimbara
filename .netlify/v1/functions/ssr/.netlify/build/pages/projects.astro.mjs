/* empty css                                 */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BJOxqC5a.mjs';
import 'piccolore';
import { Image as $$ResponsiveImage } from '../chunks/_astro_assets_DaNIag9H.mjs';
import { a as $$Icon, $ as $$Button, d as $$Collapse } from '../chunks/Svg_pSXNt16c.mjs';
import { $ as $$CommonPage } from '../chunks/CommonPage_Czs_ASbI.mjs';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://astro-pure.js.org");
const $$ProjectSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectSection;
  const { class: className, projects, ...props } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg": () => import('../chunks/alex-tyson-2BAXJ7ha74s-unsplash_D-ICR-A0.mjs'),"/src/assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg": () => import('../chunks/angelica-teran-Bk9hpaXHK4o-unsplash_xywNOZZx.mjs'),"/src/assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg": () => import('../chunks/kseniia-zapiatkina-yATU3rg8tNI-unsplash_DmJij7Su.mjs'),"/src/assets/projects/wen-qiao-g_w8I64FiO0-unsplash.jpg": () => import('../chunks/wen-qiao-g_w8I64FiO0-unsplash_C_SDucSG.mjs')

});
  const projectIconSet = {
    github: "github-circle",
    site: "earth",
    doc: "document",
    release: "package"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}${spreadAttributes(props)}> <div class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 sm:gap-y-4"> ${projects.map((project) => {
    var imagePath = null;
    if (project.image) {
      imagePath = "/src/assets/projects/" + project.image;
      if (!images[imagePath])
        throw new Error(
          `"${imagePath}" does not exist in glob: "src/assets/projects/*.{jpeg,jpg,png,gif,avif,webp}"`
        );
    }
    return renderTemplate`<div class="relative overflow-hidden rounded-xl border"> ${imagePath && renderTemplate`${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "absolute end-0 z-0 m-0 h-full w-1/2 object-cover opacity-40", "src": images[imagePath](), "alt": project.name, "loading": "lazy", "style": {
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      msMaskImage: "-ms-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      WebkitMaskImage: "-webkit-linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)"
    } })}`} <div${addAttribute(cn(
      "relative z-10 flex flex-col gap-y-2 px-3 py-1.5 sm:px-4 sm:py-3",
      imagePath && "me-20"
    ), "class")}> <a class="line-clamp-1 font-medium text-foreground no-underline transition-colors"${addAttribute(project.links[0].href, "href")} target="_blank"> ${project.name} </a> <div class="line-clamp-2 leading-snug text-muted-foreground sm:h-12"> ${project.description} </div> <div class="flex flex-row items-center gap-x-2 sm:gap-x-3"> ${project.links.map((link) => {
      const icon = projectIconSet[link.type];
      return renderTemplate`<a${addAttribute(link.href, "href")} class="rounded-full bg-muted p-1 text-muted-foreground transition-colors sm:p-1.5"${addAttribute(link.type, "aria-label")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5", "name": icon })} </a>`;
    })} </div> </div> </div>`;
  })} </div> </div>`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/projects/ProjectSection.astro", void 0);

const $$Astro$2 = createAstro("https://astro-pure.js.org");
const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sponsors;
  const { class: className, progressMax = 25, sponsors, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("grid gap-3 sm:grid-cols-2 sm:gap-3.5 lg:grid-cols-3", className), "class")}${spreadAttributes(props)}> ${sponsors.map((sponsor) => renderTemplate`<div class="sponsor-card relative h-full overflow-hidden rounded-xl border px-4 py-3"> <div class="font-medium mb-2">${sponsor.name}</div> <div class="text-xs text-muted-foreground"> ${sponsor.date} ${sponsor.platform && `by ${sponsor.platform}`} </div> <span class="absolute bottom-3 right-4 font-medium max-sm:text-lg">¥${sponsor.amount}</span> <div class="progress absolute h-full top-0 left-0 -z-10 bg-muted"${addAttribute({ width: `${Math.min(sponsor.amount / progressMax, 1) * 100}%` }, "style")}></div> </div>`)} </div>`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/projects/Sponsors.astro", void 0);

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$Sponsorship = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sponsorship;
  const { class: className, methods, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute((cn("flex flex-col justify-center gap-4 sm:flex-row", className) ?? "") + " astro-x4djmzfl", "class")}${spreadAttributes(props)}> ${methods.map((item) => renderTemplate`<div class="sponsorship-card relative justify-center overflow-hidden rounded-xl border bg-white astro-x4djmzfl"> <div class="sponsorship-card-icon absolute bottom-0 end-0 start-0 top-0 flex items-center justify-center transition-opacity astro-x4djmzfl"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-20 astro-x4djmzfl", "name": item.icon })} </div> ${renderComponent($$result, "Image", $$ResponsiveImage, { "class": "sponsorship-card-img mx-auto my-0 max-w-60 blur-sm transition-opacity astro-x4djmzfl", "src": item.image, "alt": item.name, "loading": "lazy" })} </div>`)} </div> `;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/projects/Sponsorship.astro", void 0);

const alipay = new Proxy({"src":"/_astro/alipay-qrcode.DBYU6Uk3.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rogermurillo/.gemini/antigravity/scratch/src/assets/alipay-qrcode.jpg";
							}
							
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const KeyIcon = createSvgComponent({"meta":{"src":"/_astro/key.C_x5sVWv.svg","width":32,"height":32,"format":"svg"},"attributes":{"width":"32","height":"32","viewBox":"0 0 24 24"},"children":"<g fill=\"none\" fill-rule=\"evenodd\"><path d=\"m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z\" /><path fill=\"currentColor\" d=\"M11.852 5.782a4.5 4.5 0 1 1 1.388 7.31a2.1 2.1 0 0 0-.837-.178H11.04c-.69 0-1.25.56-1.25 1.25v1.578H8.213c-.69 0-1.25.56-1.25 1.25v1.578H4.72v-1.414l5.356-5.355c.544-.544.68-1.296.55-1.931a4.5 4.5 0 0 1 1.226-4.088m7.778-1.414A6.5 6.5 0 0 0 8.666 10.27a.2.2 0 0 1-.006.118l-5.5 5.5a1.5 1.5 0 0 0-.44 1.061v2.611c0 .558.452 1.01 1.01 1.01h3.983c.69 0 1.25-.56 1.25-1.25v-1.578h1.578c.69 0 1.25-.56 1.25-1.25v-1.578h.61q.003-.002.042.013a6.502 6.502 0 0 0 7.187-10.56Zm-4.95 4.95a1.5 1.5 0 1 0 2.122-2.122a1.5 1.5 0 0 0-2.122 2.121Z\" /></g>"});

const wechat = new Proxy({"src":"/_astro/wechat-qrcode.Bo1fqqCV.jpg","width":464,"height":464,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/rogermurillo/.gemini/antigravity/scratch/src/assets/wechat-qrcode.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://astro-pure.js.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const headings = [
    { depth: 2, slug: "theme", text: "Theme" },
    { depth: 2, slug: "programs", text: "Programs" },
    { depth: 2, slug: "learnings", text: "Learnings" },
    { depth: 2, slug: "others", text: "Others" },
    { depth: 2, slug: "gpg-signature", text: "GPG Signature" },
    { depth: 2, slug: "sponsorship", text: "Sponsorship" }
  ];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$CommonPage, { "title": "Projects", "headings": headings, "view": true, "class": "astro-2hwget37" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="astro-2hwget37">Github Activities:</p> <p class="astro-2hwget37"> ${renderComponent($$result2, "Image", $$ResponsiveImage, { "src": "https://ghchart.rshah.org/659eb9/cworld1", "alt": "github activities", "inferSize": true, "loading": "lazy", "class": "astro-2hwget37" })} </p> <p class="astro-2hwget37">
If you think it would be useful or interesting to collaborate on a project, you can donate to
    support my work or contact me to discuss a project.
</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Checkout sponsorship", "class": "w-fit astro-2hwget37", "href": "#sponsorship" }, { "before": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "class": "size-5 astro-2hwget37", "name": "receive-money", "slot": "before" })}` })} <h2 id="theme" class="astro-2hwget37">Theme</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "\u{1F36D} Astro-theme-pure",
      description: "A simple, clean but powerful blog theme build by astro.",
      links: [
        { type: "github", href: "https://github.com/cworld1/astro-theme-pure" },
        { type: "site", href: "https://github.com/cworld1/astro-theme-pure" },
        {
          type: "doc",
          href: "https://github.com/cworld1/astro-theme-pure/blob/main/src/content/blog/customize/index.md"
        }
      ]
    }
  ], "class": "astro-2hwget37" })} <h2 id="programs" class="astro-2hwget37">Programs</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "\u{1F4D2} Notie",
      description: "Android note App complies with Material You specifications, developed using Java",
      links: [
        { type: "github", href: "https://github.com/cworld1/notie" },
        {
          type: "release",
          href: "https://github.com/cworld1/notie/releases"
        }
      ]
    },
    {
      name: "\u{1F484} PKU Art",
      description: "A script to beautify pku course website",
      links: [
        { type: "github", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "site", href: "https://github.com/zhuozhiyongde/pku-art" },
        { type: "doc", href: "https://docs.arthals.ink/docs/pku-art" }
      ]
    }
  ], "class": "astro-2hwget37" })} ${renderComponent($$result2, "Collapse", $$Collapse, { "title": "Some old projects", "class": "astro-2hwget37" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "Search Switcher",
      description: "Add links to each other in search engines",
      links: [{ type: "github", href: "https://github.com/cworld1/search-switcher" }]
    },
    {
      name: "Pure Baidu",
      description: "Baidu search page beautification module",
      links: [
        { type: "doc", href: "https://cworld0.com/blog/pure-baidu" },
        { type: "site", href: "https://userstyles.org/styles/173673/pure" }
      ]
    }
  ], "class": "astro-2hwget37" })} ` })} <h2 id="learnings" class="astro-2hwget37">Learnings</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "class": "my-2 astro-2hwget37", "projects": [
    {
      name: "Rust Learning",
      description: "Some notes and code about CWorld learning Rust",
      links: [{ type: "github", href: "https://github.com/cworld1/rust-learning" }]
    },
    {
      name: "CS 213 Learning",
      description: "Notes, code and experiences for Introduction to Computer Systems course",
      links: [
        {
          type: "github",
          href: "https://github.com/zhuozhiyongde/Introduction-To-Computer-System-2023Fall-PKU"
        }
      ]
    }
  ] })} <h2 id="others" class="astro-2hwget37">Others</h2> ${renderComponent($$result2, "ProjectSection", $$ProjectSection, { "projects": [
    {
      name: "CWorld",
      description: "CWorld's Github",
      links: [{ type: "github", href: "https://github.com/cworld1" }]
    },
    {
      name: "Arthals",
      description: "Arthals Github",
      links: [{ type: "github", href: "https://github.com/zhuozhiyongde" }]
    }
  ], "class": "astro-2hwget37" })}  <h2 id="gpg-signature" class="astro-2hwget37">GPG Signature</h2> <p class="astro-2hwget37">
You can verify the authenticity of the files I signed by checking the GPG signature. My GPG key
    is <code class="astro-2hwget37">114514</code>, and you can find it on the opengpg key servers or download from it.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "https://keys.openpgp.org/search?q=114514", "title": "Checkout my key", "target": "_blank", "class": "astro-2hwget37" }, { "before": ($$result3) => renderTemplate`${renderComponent($$result3, "KeyIcon", KeyIcon, { "class": "size-5 astro-2hwget37", "slot": "before" })}` })}  <h2 id="sponsorship" class="astro-2hwget37">Sponsorship</h2> <p class="astro-2hwget37">Please leave a message or contact me proactively after sponsorship.</p> ${renderComponent($$result2, "Sponsorship", $$Sponsorship, { "methods": [
    { name: "WeChat", icon: "wechat-pay", image: wechat },
    { name: "Alipay", icon: "alipay", image: alipay }
  ], "class": "astro-2hwget37" })} <p class="astro-2hwget37">Thanks to the following sponsors:</p> ${renderComponent($$result2, "Sponsors", $$Sponsors, { "progressMax": 25, "sponsors": [
    { name: "Arthals", platform: "Wechat", amount: 50, date: "2025-11-06" },
    { name: "\u987E**", platform: "Wechat", amount: 28, date: "2025-06-23" },
    { name: "Anonymous", platform: "Wechat", amount: 20, date: "2022-04-06" },
    { name: "\u534E\u96C4 (1300****71)", platform: "QQ", amount: 5, date: "2019-12-30" },
    { name: "\u25CC (1934****45)", platform: "QQ", amount: 3, date: "2019-12-30" },
    { name: "C*a (\u9177\u5B89@\u66B4\u8D70\u306E\u8717\u725B)", amount: 2, date: "2019-07-02" }
  ], "class": "astro-2hwget37" })} ` })} `;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/projects/index.astro", void 0);

const $$file = "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
