# w’akyi gu hɔ?

The Relationship Reality Check — 70% banter, 30% real talk.

**Live:** https://uglydev-k2.github.io/wakyi-gu-ho/

## What’s included
- Stage selection: Talking stage, Dating, or In a relationship. Labels and introductions are framed to suit the selected stage, without assuming exclusivity or obligatory family introductions.
- Eight-question solo check with reactions, Back, progress, keyboard controls, and mobile swipes.
- Four playful verdicts with reflection, a concrete next step, and a copyable conversation starter.
- A consistency, clarity, and mutual-effort breakdown. Higher category percentages mean stronger signals; the separate denial meter runs in the opposite direction.
- Two downloadable PNG formats: Story / Status (1080 × 1920) and square post (1080 × 1080). Native sharing when supported; WhatsApp fallback otherwise.
- Same-device two-person mode: person 1 answers, passes the phone, person 2 chooses their own stage and answers independently, then both see summaries and topics to discuss. No combined compatibility score or raw-answer display. Comparison sharing is not automated.
- Original cream/lime styling, interactive hero, pull-quote, accessible focus states, and reduced-motion support. No roast-style toggle.

## Files
- `index.html`: accessible page shell and versioned asset references
- `styles.css`: layout, brand styling, responsive views
- `config.js`: editable questions, stage overrides, categories, scoring thresholds, verdicts, advice, and copy
- `model.js`: pure scoring and comparison calculations
- `app.js`: in-memory application flow and client-side image generation
- `tests/model.test.cjs`: dependency-free scoring and comparison checks
- `.nojekyll`: plain static GitHub Pages hosting

## Run, test, and deploy
No installation or build step. Serve this directory with any static server (for example `python3 -m http.server 8000`) and open its local URL. HTTPS or localhost is needed for reliable clipboard and Web Share behavior.

Run checks with `node tests/model.test.cjs`.

GitHub Pages publishes `main` from `/(root)`. Future commits automatically deploy. When changing assets, update the version query strings in index.html so previous visitors receive fresh files.

## Privacy
Answers and summary state stay in memory in the current browser tab. No accounts, analytics, cookies, local/session storage, or answer-saving backend. Closing or refreshing clears state; Home/Exit and starting a new check also reset it. The browser still downloads normal static files from GitHub Pages.

A share card contains only the verdict, emoji, roast, and playful meter reading—not the selected stage or personal answers. Saving and sharing require the visitor’s action.

Two-person mode requires both people to agree to compare. It is a pass-the-phone flow, not authenticated private accounts: give each other space while answering. The handoff screen does not reveal person 1’s result. Comparison displays verdicts, stages, category summaries, and broad topic differences, without answer text. Neither person’s experience is treated as the objective truth. Stop if comparison feels unsafe.

## Scoring assumptions
Each answer scores 0–3, with equal question weights and a total maximum of 24. The denial meter is total / maximum × 100, rounded. Verdict thresholds: 0–5 Solid Ground; 6–11 Mostly Real, Some Assuming; 12–17 Situationship Szn; 18–24 Solo Group Work.

Category strength = 100 minus the category’s normalized assumption score:
- Consistency: contact, plans, and next catch-up (questions 1, 3, 8)
- Clarity: expectations and inclusion (questions 4, 5)
- Mutual effort: starting conversations, respectful conflict, and shared effort (questions 2, 6, 7)

75–100 = stronger signals; 40–74 = mixed signals; below 40 = worth a conversation. Comparison highlights up to three topics with a two-point or greater answer-score gap, and explicitly flags different stage choices. These are editorial prompts, not validated measurements or a compatibility assessment. Update verdict thresholds if changing the total score range.

A serious conflict response adds a supportive note regardless of total. Native share sheets, emoji appearance, and app-specific posting options depend on the browser/OS. The site never posts to a Status or Story automatically.

A vibe check, not a relationship diagnosis.
