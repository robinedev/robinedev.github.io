# robinedev.github.io

My personal site and blog. Static, built by GitHub Pages with Jekyll.

Live at **https://robinedev.github.io**

## Dependencies

None, on purpose.

- no gem theme, no Jekyll plugins
- no CSS or JS frameworks, no bundler, no build step
- no webfonts, system font stacks only
- no analytics, no trackers, no third party images

The one external component is [giscus](https://giscus.app) on the
guestbook, which backs comments onto this repo's GitHub Discussions.
Remove that one script tag in `doc/guestbook.md` and the site makes
no third party requests at all.

## Layout

```text
.
├── _config.yml          site settings, bio, "currently" block
├── _data/nav.yml        sidebar nav
├── _includes/           inline SVG figures
├── _layouts/            default (sidebar shell), page, post
├── _posts/              YYYY-MM-DD-slug.md
├── assets/
│   ├── css/main.css     the whole theme, colour tokens at the top
│   ├── js/main.js       day/night steep toggle, giscus sync
│   ├── images/avatar.png
│   └── favicon.svg
├── doc/                 content pages
├── index.html
└── 404.html
```

## Common edits

**Add a post.** Drop `_posts/YYYY-MM-DD-slug.md` in with front matter
(`layout: post`, `title`, `description`, `date`, `tags`). The field
notes page and the home page pick it up on their own.

**Change the sidebar bio or the "currently" block.** Both live in
`_config.yml`.

**Add or rename a nav link.** Edit `_data/nav.yml`.

**Change the colours.** The two token blocks at the top of
`assets/css/main.css`, `[data-theme="day"]` and `[data-theme="night"]`.
Nothing below them hard-codes a colour.

## Running it locally

GitHub Pages builds on push, so this is optional:

```bash
gem install bundler jekyll
jekyll serve --livereload
# http://127.0.0.1:4000
```

## Accessibility

Skip link, visible focus rings, `aria-current` on the active nav item,
real heading order, and `prefers-reduced-motion` respected.
