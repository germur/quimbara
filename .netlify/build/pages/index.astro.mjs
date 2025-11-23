/* empty css                                 */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BJOxqC5a.mjs';
import 'piccolore';
import { $ as $$PostPreview } from '../chunks/PFSearch_BirCzuI0.mjs';
import { g as getBlogCollection, s as sortMDByDate } from '../chunks/server_Dr_MgReL.mjs';
import { g as $$Label, a as $$Icon, $ as $$Button } from '../chunks/Svg_pSXNt16c.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DXtbA_-I.mjs';
import 'clsx';
import { c as cn } from '../chunks/class-merge_ZZ4CtDft.mjs';
import { c as config } from '../chunks/site.config_B14VW2tf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astro-pure.js.org");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn("flex flex-col gap-y-5 md:flex-row md:gap-y-0", className), "class")}> <div class="text-xl font-semibold md:min-w-36"> <h2>${title}</h2> </div> <div class="flex flex-1 flex-col gap-y-3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/components/home/Section.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_POSTS = 10;
  const allPosts = await getBlogCollection();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Inicio" }, "highlightColor": "#EF4444" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex w-full flex-col items-center"> <section class="animate mb-10 flex flex-col items-center gap-y-7" id="content-header"> <div class="flex flex-col items-center gap-y-4"> <h1 class="text-4xl font-bold text-red-600">${config.title}</h1> <p class="text-xl text-muted-foreground text-center max-w-2xl"> ${config.description} </p> <div class="flex flex-wrap justify-center gap-x-7 gap-y-3"> ${renderComponent($$result2, "Label", $$Label, { "title": "MMA" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "rss", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "UFC" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "rss", "class": "size-5", "slot": "icon" })}` })} ${renderComponent($$result2, "Label", $$Label, { "title": "Boxeo" }, { "icon": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "rss", "class": "size-5", "slot": "icon" })}` })} </div> </div> ${renderComponent($$result2, "Button", $$Button, { "title": "Leer \xDAltimas Noticias", "href": "/blog", "variant": "ahead" })} </section> <div id="content" class="animate flex flex-col gap-y-10 md:w-4/5 lg:w-5/6"> ${allPostsByDate.length > 0 ? renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "\xDAltimas Publicaciones" }, { "default": async ($$result3) => renderTemplate` <ul class="flex flex-col gap-y-1.5 sm:gap-y-2"> ${allPostsByDate.map((p) => renderTemplate`<li class="flex flex-col gap-x-2 sm:flex-row"> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> ${renderComponent($$result3, "Button", $$Button, { "title": "Ver todas las publicaciones", "class": "w-fit self-end", "href": "/blog", "variant": "ahead" })} ` })}` : renderTemplate`${renderComponent($$result2, "Section", $$Section, { "title": "Pr\xF3ximamente" }, { "default": async ($$result3) => renderTemplate` <p class="text-muted-foreground">Estamos preparando el mejor contenido de combate para ti.</p> ` })}`} </div> </main> ` })}`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/index.astro", void 0);

const $$file = "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
