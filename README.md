# w’akyi gu hɔ?

The Relationship Reality Check — 70% banter, 30% real talk.

A dependency-free, mobile-friendly relationship quiz with Ghanaian English and Twi flavor, four verdict tiers, and shareable result cards.

## Live site
https://uglydev-k2.github.io/wakyi-gu-ho/

## Files
- `index.html`: accessible page shell
- `styles.css`: cream/lime design and responsive styles
- `app.js`: quiz flow, hero interactions, canvas PNG export, sharing
- `config.js`: one editable object for questions, scores, verdict thresholds, advice, and copy
- `.nojekyll`: serves the plain static files directly on GitHub Pages

## Run and deploy
No dependencies or build step. Open index.html for a basic preview, or serve the folder with any static server. Clipboard and sharing work best over HTTPS.

GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root). Future commits to main update the website automatically.

## Privacy
Answers stay in memory in the browser tab. No accounts, analytics, cookies, storage, or backend. Reloading or closing the tab clears answers. Sharing and PNG downloads only happen when the visitor chooses them; individual answers are never included on a share card.

## Edit the quiz
Change `QUIZ_CONFIG` in config.js. Eight questions each score 0–3. Verdicts: 0–5 Solid Ground; 6–11 Mostly Real, Some Assuming; 12–17 Situationship Szn; 18–24 Solo Group Work. The denial meter is playful editorial scoring, not a diagnosis or prediction.

## Accessibility
Keyboard controls: Tab/Enter/Space, 1–4 for answers, ↑/↓ between choices, ← for Back, Escape to exit. Touch users can swipe right to go Back or left after choosing to advance early. Reduced-motion preferences are respected.

A vibe check, not a relationship diagnosis.
