---
layout: page
title: README
permalink: /doc/readme/
description: >-
  How I work, what I need to do my best work, and the fastest way to
  get something useful out of me.
---

# README.md

This is a personal README. It's the same thing teams write for a
service, what it does, how to run it, and where it breaks, except the
service is me. Skim it before we work together and we skip a week of
figuring each other out.

**The short version:** show me a picture, and write it down. I think
in diagrams, and I remember what's in a doc, not what was said in a
hallway. Give me a sketch and a written brief, and you'll get
something automated and documented back.

## The two things that matter most

### I work best with visual representations

Boxes and arrows beat three paragraphs every time. If you can draw the
thing, the flow, the dependency, the before and after, I'll understand
it in ten seconds instead of ten minutes. I'll also spot the gap in it
faster.

**What helps:** a quick diagram in any tool, a photo of a whiteboard,
an annotated screenshot with an arrow pointing at the thing, a table
when there are options to compare.

**What you'll get back:** a sketch. If we're deciding anything
non-trivial, expect a diagram from me first, and expect me to ask "is
this what you meant?" before I build. Agreeing on the picture is a lot
cheaper than agreeing on the implementation.

### I need things written down

If it isn't written down, it didn't happen. That's not me being
difficult. Spoken decisions evaporate, and written ones can be
searched six months later by someone who wasn't in the room.

**What helps:** requests in a ticket or a message instead of a verbal
drive-by, a written recap after any call where something was decided,
and context in the thread rather than in your head.

**What you'll get back:** I'll write it down for you. Recaps after
calls, runbooks after projects, and a comment on the ticket instead of
a "yeah, I did that" in passing.

{% include diagram-workflow.html %}

## The rest of how I work

**Automate it, or document it. Ideally both.** If I do a task twice by
hand, the third time is a script. If it can't be a script, it becomes
a runbook with a link someone can actually find. Tribal knowledge is
an outage waiting for a vacation.

**Boring technology, on purpose.** I pick the tool with the biggest
community and the dullest release notes. New and shiny is a
maintenance bill the whole team pays later, usually at 2am.

**Least privilege is a default, not a project.** Access gets granted
narrowly and expires on its own. It's much easier to widen a
permission than to claw one back after six months of drift.

**Fix the class, not the ticket.** One broken laptop is a ticket. Five
broken the same way is a configuration bug, and I'd rather spend the
afternoon on the config than the week on the tickets.

## Working with me

| channel | good for | you can expect |
| :--- | :--- | :--- |
| Issue or ticket | anything with a deliverable | same working day |
| Chat | quick unblocks, "is this normal?" | a few hours |
| Email | external, formal, anything with a paper trail | a day or two |
| Meeting | decisions, conflict, onboarding, demos | happy to, with an agenda and a written recap after |

A few things make requests go faster:

- **Lead with the outcome**, not the mechanism. "People need access to
  X on day one" beats "add this to the group," because sometimes the
  group is the wrong answer.
- **Paste the error, and screenshot the screen.** The text so I can
  search it, the picture so I can see where you were.
- **Say the deadline out loud.** I'll almost always say yes to a real
  one, and push back on an invented one.
- **Loud isn't the same as urgent.** If it's genuinely on fire, say
  "this is on fire," and I'll drop what I'm holding.

### What slows me down

Verbal-only requests with no trail. Decisions made in a meeting I
wasn't in and never written up. A wall of text with the actual
question buried in paragraph four. None of these are dealbreakers. If
I ever do one of them to you, say "can you put that in the ticket?"
right back at me.

## What I'm good at, and what I'm not

**Reach for me when** device management is misbehaving, identity needs
wiring to something, onboarding or offboarding is still manual, an
audit is coming and nobody can find the evidence, or a process works
only because one person remembers it.

**Point someone else at it when** you need production application
code, a design system, or data modelling. Anywhere I'd be the
third-best person in the room, I'll tell you. That's not false
modesty, it's self-preservation.

## Operating rhythm

Deep work in the morning. Interrupt it for an outage, not for a status
update. Afternoons are for people: reviews, pairing, meetings, and
questions.

I don't expect replies outside your hours, and I don't want them. If I
send something at an odd hour, it's because that's when I had the
thought, not because a clock is running.

## Feedback

Give it to me plainly and early, and in writing if it matters. "This
approach is wrong because X" is a gift. "It's fine," when it isn't, is
the expensive version. I'll ask clarifying questions rather than
defend a draft, and I'd much rather be corrected in a comment than in
a postmortem.

> This page gets edited when the answers change, not once a year. If
> something here has gone stale, the
> [guestbook]({{ '/doc/guestbook/' | relative_url }}) is the fastest
> way to tell me.
