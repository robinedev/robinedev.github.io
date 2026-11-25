---
layout: post
title: "Rebuilding this site, and what I cut"
description: >-
  The site had grown a lot of decoration and not much substance. Here's
  what came out, and what the rebuild runs on.
date: 2026-11-25 09:00:00 -0500
tags: [meta]
reading_time: "2 min read"
---

My site had drifted into decoration. Progress bars, badge pills, a row
of stat tiles, and an animated banner pulled from somebody else's
server. None of it told you anything about me or my work.

So I cut it, and started from what a personal site is supposed to do:
say who I am, show what I've shipped, and hold the writing.

## What it runs on

Nothing much, deliberately.

- no gem theme, and no Jekyll plugins
- no CSS or JS frameworks, no bundler, no build step of my own
- no webfonts, so no requests to a font host
- no analytics and no trackers

One stylesheet and one script, both small enough to read in a sitting.
The only third party thing left is giscus on the guestbook, which backs
comments onto this repo's own GitHub Discussions.

The old version pulled an animated SVG from a third party host just to
type five phrases in a loop. That's gone. One fewer request to a server
neither of us controls, for something the page didn't need.

## Adding a post

Drop a file in `_posts/` named `YYYY-MM-DD-some-slug.md`:

```yaml
---
layout: post
title: "A title"
description: "One or two lines. This shows in the list."
date: 2026-11-25 09:00:00 -0500
tags: [jamf, identity]
reading_time: "5 min read"
---
```

Everything after the front matter is normal markdown. The post lands at
`/doc/blog/some-slug/`, shows up at the top of the field notes list, and
appears on the home page. There's no index to update and no navigation
to edit.

## What's next

The queue, roughly in order: joiner, mover, and leaver automation end to
end. Collecting compliance evidence without a spreadsheet. An honest
write-up of a device rollout that didn't go to plan.

If one of those is the thing you're stuck on, say so in the guestbook
and it moves up.
