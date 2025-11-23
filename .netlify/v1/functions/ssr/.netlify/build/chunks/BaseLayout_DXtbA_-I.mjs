import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, f as renderScript, h as defineStyleVars, i as renderHead, s as spreadAttributes, e as renderSlot } from './astro/server_BJOxqC5a.mjs';
import 'piccolore';
import { c as config } from './_virtual_config_Cw6RfqEu.mjs';
import { a as $$Icon } from './Svg_pSXNt16c.mjs';
/* empty css                        */
import 'clsx';
import './_astro_content_BeGRmQpa.mjs';
import { c as config$1 } from './site.config_B14VW2tf.mjs';

const $$Astro$2 = createAstro("https://astro-pure.js.org");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const footerConf = config.footer;
  let social = footerConf.social || {};
  social.rss = {
    label: "RSS",
    url: "/rss.xml"
  };
  const footerLink1 = footerConf.links?.filter(({ pos }) => pos === 1) || [];
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mb-5 mt-16 w-full"> <div class="border-t pt-5"> <div class="flex items-center gap-y-3 max-sm:flex-col sm:justify-between sm:gap-y-0"> <div class="flex items-center gap-x-4 gap-y-2 text-muted-foreground max-sm:flex-col [&_a]:text-foreground">  ${footerLink1.length > 0 && renderTemplate`<div> ${footerLink1.map(({ title, link, style }, index) => renderTemplate`<span> <a${addAttribute(link, "href")} target="_blank"${addAttribute(style, "class")}> ${title} </a> ${index < footerLink1.length - 1 && " \u2022 "} </span>`)} </div>`}  <div> ${config.footer.year} ${config.author} ${footerConf.links && footerConf.links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`
&
<span> ${footerConf.links.filter(({ pos }) => pos === 2).map(({ title, link, style }) => renderTemplate`<span> <a${addAttribute(link, "href")} target="_blank"${addAttribute(style, "class")}> ${title} </a> </span>`)} </span> ` })}`} </div> ${renderTemplate`<span> <a href="https://github.com/withastro/astro" target="_blank">
Astro
</a>
&
<a href="https://github.com/cworld1/astro-theme-pure" target="_blank">
Pure
</a>
theme powered
</span>`} </div>  <div class="flex items-center gap-x-4"> ${footerConf.social && Object.entries(footerConf.social).map(([platform, { label, url }]) => renderTemplate`<a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75"${addAttribute(url, "href")}${addAttribute(label, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "name": platform })} </a>`)} </div> </div> </div> </footer>`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/node_modules/astro-pure/components/basic/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "  <script>\n  const toggleDarkModeElement = document.getElementById('toggleDarkMode')\n  if (toggleDarkModeElement) {\n    toggleDarkModeElement.dataset.theme = localStorage.getItem('theme') || 'system'\n  }\n<\/script> ", " "])), renderComponent($$result, "header-component", "header-component", { "class": "group sticky top-4 z-50 max-md:z-30 mb-12 flex items-center justify-between rounded-xl border border-transparent max-sm:py-1 sm:rounded-2xl astro-zgz2aqyx" }, { "default": () => renderTemplate` ${maybeRenderHead()}<a class="z-30 text-xl font-semibold group-[.not-top]:ms-2 sm:group-[.not-top]:ms-3 astro-zgz2aqyx" style="transition:margin-inline 0.3s" href="/" aria-label="Brand">${config.title}</a> <div class="flex items-center gap-x-2 astro-zgz2aqyx">  <div id="headerExpandContent" class="end-0 start-0 top-12 grid border border-transparent group-[.not-top]:rounded-xl group-[.expanded]:opacity-100 dark:group-[.expanded.not-top]:bg-muted max-sm:absolute max-sm:opacity-0 max-sm:group-[.not-top]:border-border max-sm:group-[.expanded.not-top]:bg-background max-sm:group-[.not-top]:px-4 max-sm:group-[.not-top]:py-2 sm:grid-rows-1 astro-zgz2aqyx"> <div class="flex flex-col items-center justify-center overflow-hidden sm:flex-row astro-zgz2aqyx"> ${config.header.menu.map((item) => renderTemplate`<a${addAttribute(item.link, "href")} class="w-full flex-none grow py-2 text-right font-medium transition-none hover:text-primary sm:w-fit sm:px-3 astro-zgz2aqyx" aria-label="Nav menu item"> ${item.title} </a>`)} <div class="flex w-full grow flex-row justify-end gap-x-3 sm:w-fit sm:gap-x-5 astro-zgz2aqyx"> <a class="px-1 py-2 transition-none sm:px-2 astro-zgz2aqyx" href="/search" title="Search"> <span class="sr-only astro-zgz2aqyx">Search</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "search", "class": "size-5 astro-zgz2aqyx" })} </a> </div> </div> </div>  <div class="z-30 flex gap-x-4 group-[.not-top]:gap-x-2 astro-zgz2aqyx" style="transition:gap 0.3s"> <button id="toggleDarkMode" class="group/dark box-content size-5 rounded-md border p-1.5 transition-colors hover:bg-border sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Dark Theme</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "system size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "computer" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "light hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "sun" })} ${renderComponent($$result, "Icon", $$Icon, { "class": "dark hidden size-5 group-hover/dark:text-primary astro-zgz2aqyx", "name": "moon" })} </button> <button id="toggleMenu" class="rounded-md border p-1.5 transition-colors hover:bg-border sm:hidden sm:group-[.not-top]:rounded-xl astro-zgz2aqyx"> <span class="sr-only astro-zgz2aqyx">Menu</span> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-5 astro-zgz2aqyx", "name": "menu" })} </button> </div> </div> ` }), renderScript($$result, "/Users/rogermurillo/.gemini/antigravity/scratch/node_modules/astro-pure/components/basic/Header.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/rogermurillo/.gemini/antigravity/scratch/node_modules/astro-pure/components/basic/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script>
  function simpleSetTheme() {
    let theme = localStorage.getItem('theme')
    // If undefined or 'system', get from system
    if (!theme || theme === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0B0B10' : '#FCFCFD')
  }
  simpleSetTheme()
  document.addEventListener('astro:page-load', () => simpleSetTheme())
<\/script>`, ""])), renderScript($$result, "/Users/rogermurillo/.gemini/antigravity/scratch/node_modules/astro-pure/components/basic/ThemeProvider.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/rogermurillo/.gemini/antigravity/scratch/node_modules/astro-pure/components/basic/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://astro-pure.js.org");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const siteTitle = `${title} ${config$1.titleDelimiter} ${config$1.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/images/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><link rel="preload" href="/fonts/Satoshi-Variable.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Satoshi-VariableItalic.ttf" as="font" type="font/ttf" crossorigin><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(config$1.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(config$1.title, "content")} property="og:site_name"><meta${addAttribute(config$1.locale.attrs, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(config$1.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link rel="alternate" type="application/rss+xml"${addAttribute(config$1.title, "title")}${addAttribute(`${Astro2.site}rss.xml`, "href")}><meta${addAttribute(Astro2.generator, "content")} name="generator"><link rel="stylesheet" href="/styles/global.css">${/* User script*/
  renderTemplate`${renderScript($$result, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://astro-pure.js.org");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = config$1.description, ogImage, title },
    highlightColor,
    ...props
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ highlightColor }]);
  return renderTemplate`<html${addAttribute(config$1.locale.lang, "lang")} class="astro-37fxchfa"${addAttribute($$definedVars, "style")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title, "class": "astro-37fxchfa" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-37fxchfa" })}${renderHead()}</head> <body class="flex justify-center bg-background text-foreground astro-37fxchfa"${spreadAttributes(props)}${addAttribute($$definedVars, "style")}> ${highlightColor && renderTemplate`<div id="highlight-gradient" class="pointer-events-none absolute start-0 top-0 z-0 h-screen w-full opacity-25 astro-37fxchfa"${addAttribute(`${`background-image:linear-gradient(${highlightColor},transparent)`}; ${$$definedVars}`, "style")}></div>`} <div class="w-full max-w-[70rem] px-4 sm:px-7 lg:px-10 min-h-[100dvh] flex flex-col justify-between astro-37fxchfa"${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Header", $$Header, { "class": "astro-37fxchfa" })} <div class="flex-1 w-full astro-37fxchfa"${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37fxchfa" })} </div>   </body> </html>`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
