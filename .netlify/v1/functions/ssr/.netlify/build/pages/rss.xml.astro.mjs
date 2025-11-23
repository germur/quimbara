import { getImage } from '../chunks/_astro_assets_DaNIag9H.mjs';
import rss from '@astrojs/rss';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import { c as config } from '../chunks/_virtual_config_Cw6RfqEu.mjs';
import { s as sortMDByDate, g as getBlogCollection } from '../chunks/server_Dr_MgReL.mjs';
export { renderers } from '../renderers.mjs';

const imagesGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/3d-rendering/nikola-arsov-still-life-interior-design-vray-3ds-max-05-930px.jpg": () => import('../chunks/nikola-arsov-still-life-interior-design-vray-3ds-max-05-930px_6kGwucUj.mjs'),"/src/content/blog/3d-rendering/thanos-dd-single-image-004a.jpg": () => import('../chunks/thanos-dd-single-image-004a_Cq6MIL-r.mjs'),"/src/content/blog/3d-rendering/thumbnail.jpg": () => import('../chunks/thumbnail_C12Fv4r8.mjs'),"/src/content/blog/analisis-peleas/ilia-topuria-cover.jpg": () => import('../chunks/ilia-topuria-cover_C1y6bcG-.mjs'),"/src/content/blog/customize/thumbnail.jpg": () => import('../chunks/thumbnail_BpYpSfor.mjs'),"/src/content/blog/improve-concentration/thumbnail.jpg": () => import('../chunks/thumbnail_CU2PsXCs.mjs'),"/src/content/blog/markdown-zh/thumbnail.jpg": () => import('../chunks/thumbnail_pQc3Z070.mjs'),"/src/content/blog/markdown/thumbnail.jpg": () => import('../chunks/thumbnail_Ch1XQl5U.mjs'),"/src/content/blog/music-journey/thumbnail.jpg": () => import('../chunks/thumbnail_CyBR9kr2.mjs')


});
const renderContent = async (post, site) => {
  function remarkReplaceImageLink() {
    return async function(tree) {
      const promises = [];
      visit(tree, "image", (node) => {
        if (node.url.startsWith("/images")) {
          node.url = `${site}${node.url.replace("/", "")}`;
        } else {
          const imagePathPrefix = `/src/content/blog/${post.id}/${node.url.replace("./", "")}`;
          const promise = imagesGlob[imagePathPrefix]?.().then(async (res) => {
            const imagePath = res?.default;
            if (imagePath) {
              node.url = `${site}${(await getImage({ src: imagePath })).src.replace("/", "")}`;
            }
          });
          if (promise) promises.push(promise);
        }
      });
      await Promise.all(promises);
    };
  }
  const file = await unified().use(remarkParse).use(remarkReplaceImageLink).use(remarkRehype).use(rehypeStringify).process(post.body);
  return String(file);
};
const GET = async (context) => {
  const allPostsByDate = sortMDByDate(await getBlogCollection());
  const siteUrl = context.site ?? new URL("https://astro-pure.js.org");
  return rss({
    // Basic configs
    trailingSlash: false,
    xmlns: { h: "http://www.w3.org/TR/html4/" },
    stylesheet: "/scripts/pretty-feed-v3.xsl",
    // Contents
    title: config.title,
    description: config.description,
    site: "https://astro-pure.js.org",
    items: await Promise.all(
      allPostsByDate.map(async (post) => ({
        pubDate: post.data.publishDate,
        link: `/blog/${post.id}`,
        customData: `<h:img src="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />
          <enclosure url="${typeof post.data.heroImage?.src === "string" ? post.data.heroImage?.src : post.data.heroImage?.src.src}" />`,
        content: await renderContent(post, siteUrl),
        ...post.data
      }))
    )
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
