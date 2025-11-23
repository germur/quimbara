/* empty css                                    */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BJOxqC5a.mjs';
import 'piccolore';
import { $ as $$Button, f as $$CardList } from '../../chunks/Svg_pSXNt16c.mjs';
import { c as cn } from '../../chunks/class-merge_ZZ4CtDft.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DXtbA_-I.mjs';
import { i as integ, t as terms } from '../../chunks/site.config_B14VW2tf.mjs';
export { renderers } from '../../renderers.mjs';

const $$List = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "Site policy",
    description: "Site policy documentation"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "title": "Back", "href": "/", "variant": "back" })} ${maybeRenderHead()}<main class="mt-6 lg:mt-10"> <div id="content-header" class="animate"> <h1 class="mb-6 text-3xl font-medium">Site Policy</h1> </div> <div id="content"${addAttribute(cn("animate mt-8 max-w-none md:min-w-[45ch]", integ.typography.class), "class")}> <h2 class="text-xl font-medium">Site policy documentation</h2> ${renderComponent($$result2, "CardList", $$CardList, { ...terms })} <h2 class="text-xl font-medium">Help Information</h2> <p>You need to add md files in this directory.</p> </div> </main> ` })}`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/terms/list.astro", void 0);

const $$file = "/Users/rogermurillo/.gemini/antigravity/scratch/src/pages/terms/list.astro";
const $$url = "/terms/list";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$List,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
