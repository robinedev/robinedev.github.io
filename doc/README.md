---
layout: page
title: README
permalink: /doc/readme/
description: >-
  How to work with me. My working style, how I handle pressure and
  disagreement, and the fastest way to get something useful out of me.
---

# How to work with Aube

This is a personal README. Teams write them for a service: what it
does, how to run it, and where it breaks. This one is for me. Skim it
before we work together and we skip a week of figuring each other out.

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

## How I work

**Automate it, or document it. Ideally both.** If I do a task twice by
hand, the third time is a script. If it can't be a script, it becomes
a runbook with a link someone can actually find. Tribal knowledge is
an outage waiting for a vacation.

**I like new tech, and I test it properly.** I’ll happily be the
first on the team to try something, and I usually am. I just won’t
put it in front of a few hundred laptops until I’ve broken it myself
first, on purpose, to see how it fails.

**Least privilege is a default, not a project.** Access gets granted
narrowly and expires on its own. It's much easier to widen a
permission than to claw one back after six months of drift.

**Fix the class, not the ticket.** One broken laptop is a ticket. Five
broken the same way is a configuration bug, and I'd rather spend the
afternoon on the config than the week on the tickets.

## When the brief is vague

I don't sit on ambiguity and I don't guess in silence. I write down
the reading of it I think is right, send it back in a line or two, and
start on the part that's true under either reading. If a decision
can't be reversed, I stop and ask first. If it can, I'll make the call
and flag it, because waiting a day for a reply costs more than
changing my mind later.

## When everything is urgent

Not everything is. I sort by blast radius: how many people are stuck,
whether there's a workaround, and whether it gets worse if it waits. A
loud request from one person loses to a quiet one blocking a whole
team. If your thing drops down the list, you'll hear that from me
rather than hearing nothing, because silence reads as "forgotten."

## When I disagree with you

I'll say so once, plainly, with the reason and what I'd do instead.
Then, if the call isn't mine, I'll commit to your decision and support
it properly, no quiet foot-dragging. If I think a decision is actually
dangerous, I'll say that part out loud, in writing, and escalate once.
Disagreeing is cheap. Relitigating a settled decision for a month is
expensive.

## When I'm wrong

I'd rather find out early and loudly than late and politely. If I
broke it, I'll say I broke it, fix it, and write up what happened
without hunting for someone to pin it on. Postmortems are for the
configuration, not for the person who ran the command.

## In an incident

I get quieter, not louder. First the bleeding stops, then we work out
why. I'll claim the comms role if nobody has, because the worst thing
in an outage is four people fixing the same thing and nobody telling
the rest of the company anything. The write-up comes the next day,
while it's still accurate.

## How I like to be managed

Give me the outcome and the constraints, then leave me the how. Tell
me what "done" looks like, and tell me early if that changes. I don't
need daily check-ins, but I do need to know where the work sits in the
bigger picture, otherwise I optimise the wrong thing beautifully.

What I want from a one to one: what's coming, what I'm missing, and
one thing I could do better. I'll bring the same.

## What energizes me, and what drains me

**Energizing:** a manual process I'm allowed to delete. Someone
handing me a messy problem and the room to redesign it. Teaching
somebody the thing that took me a week to work out.

**Draining:** work that can't be finished because the decision keeps
moving. Meetings that could have been a doc. Being asked for a number
without being told what decision it's feeding.

## Working with me

| channel | good for | you can expect |
| --- | --- | --- |
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

**What I'm working on:** saying "not this quarter" earlier. I'm good
at absorbing one more small thing, which is how a quarter quietly
fills up with small things.

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

> Curious about the parts of me that aren't work? Pickleball,
> foraging, gardening, and far too many card games live on
> [about]({{ '/doc/profile/' | relative_url }}).
