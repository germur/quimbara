import { p as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BJOxqC5a.mjs';
import { b as $$GithubCard } from './MediumZoom_BI0WmpR-.mjs';
import 'clsx';

const frontmatter = {
  "title": "Test Page",
  "publishDate": "2025-07-03",
  "updatedDate": "2025-07-10",
  "description": "Test page for any purpose",
  "tags": ["Test"],
  "language": "English",
  "draft": true,
  "minutesRead": "1 min read",
  "words": 22
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><pre><code><span class=\"line\"><span>test</span></span>\n<span class=\"line\"><span>test</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">plaintext</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"test\ntest\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n<div class=\"astro-code astro-code-themes github-light github-dark\" style=\"background-color:#fff;--shiki-dark-bg:#24292e;color:#24292e;--shiki-dark:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"log\"><div class=\"title text-sm text-foreground px-3 py-1 bg-primary-foreground rounded-lg border\">hello.log</div><pre><code><span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">test</span></span>\n<span class=\"line\"><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">test</span></span></code></pre><span class=\"language ps-1 pe-3 text-sm bg-muted text-muted-foreground\">log</span><button class=\"copy text-muted-foreground p-1 box-content border rounded bg-primary-foreground\" data-code=\"test\ntest\" onclick=\"\n          navigator.clipboard.writeText(this.dataset.code);\n          this.classList.add(&#x27;copied&#x27;);\n          setTimeout(() => this.classList.remove(&#x27;copied&#x27;), 2000)\n        \"><div class=\"ready\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-clipboard-line\"></use></svg></div><div class=\"success hidden\"><svg class=\"size-5\"><use href=\"/icons/code.svg#mingcute-file-check-line\"></use></svg></div></button></div>\n"
    }), createVNode($$GithubCard, {
      repo: "cworld1/astro-theme-pure"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<blockquote>\n<p>Test</p>\n</blockquote>\n<p>Test <code>inline code</code></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"overflow-x-auto w-full flex justify-center\"><table><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr></thead><tbody><tr><td>Row 1</td><td>Data 1</td><td>Data 2</td></tr><tr><td>Row 2</td><td>Data 1</td><td>Data 2</td></tr><tr><td>Row 3</td><td>Data 1</td><td>Data 2</td></tr></tbody></table></div>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/blog/test.mdx";
const file = "/Users/rogermurillo/.gemini/antigravity/scratch/src/content/blog/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/rogermurillo/.gemini/antigravity/scratch/src/content/blog/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
