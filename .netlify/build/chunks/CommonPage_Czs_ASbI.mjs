import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, F as Fragment, m as maybeRenderHead, e as renderSlot } from './astro/server_BJOxqC5a.mjs';
import 'piccolore';
import { a as $$TOC } from './PFSearch_BirCzuI0.mjs';
import { $ as $$ContentLayout } from './ContentLayout_B_qoQA-v.mjs';
import { $ as $$PageInfo, a as $$Comment } from './PageInfo_CK3VL0dJ.mjs';

const $$Astro = createAstro("https://astro-pure.js.org");
const $$CommonPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CommonPage;
  const { title, headings, view, comment: enableComment, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$ContentLayout, { "meta": { title }, ...props }, { "bottom": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom"], renderTemplate` ${enableComment && renderTemplate`${renderComponent($$result2, "Comment", $$Comment, { "class": "mt-3 sm:mt-6" })}`} `)}`, "bottom-sidebar": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["bottom-sidebar"])}`, "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])}   `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl">${title}</h1> ${(view || enableComment) && renderTemplate`${renderComponent($$result3, "PageInfo", $$PageInfo, { "view": view, "comment": enableComment, "class": "italic" })}`}` })}`, "sidebar": ($$result2) => renderTemplate`${headings?.length && renderTemplate`${renderComponent($$result2, "TOC", $$TOC, { "headings": headings, "slot": "sidebar" })}`}` })}`;
}, "/Users/rogermurillo/.gemini/antigravity/scratch/src/layouts/CommonPage.astro", void 0);

export { $$CommonPage as $ };
