# Changelog

This file tracks changes made during the portfolio redesign. Update it whenever an approved change is completed.

## Approval requirement

- Ask the user before making further changes or taking important actions outside the approved scope.
- Discuss the proposed scope and wait for explicit approval before proceeding.
- Include a changelog update with each approved change.

## Version 1.2 — 2026-09-28

### Full-screen layout and navigation

- Widened centered content containers, balanced navigation, and improved responsive spacing and mobile portrait alignment.
- Added six full-width, viewport-height pages: Home, Work, About, Experience, Skills, and Contact. Separated Experience from About and included the footer within Contact.
- Display one page at a time with a right-to-left entrance transition. Taller content scrolls internally before advancing to the next page.
- Added wheel, touch, keyboard, and previous/next page navigation with a page indicator, transition cooldown, and reduced-motion support.
- Preserved section links, direct hash navigation, and browser history behavior; inactive pages are hidden and inert.

### Work background and project controls

- Moved the BMW image from the short Work banner into a full-page background.
- Centered and scaled the car to preserve its full silhouette, with a softened background filling the screen and a dark overlay behind the project content.
- Moved project pagination arrows to the left and right of the cards, with responsive positioning and disabled states at the first and last pairs.
- Made the show-all/featured-projects toggle a bright blue button.
- Simplified project badges to individual two-digit numbers and moved them to the top-right corner of each image.

### Technology logos and page backgrounds

- Added locally hosted SVG technology logos beside the Skills labels, with a custom CI / CD symbol and decorative images hidden from assistive technology.
- Arranged skills into spaced logo-and-label columns, preserving the four desktop categories and adapting the layout for tablet and mobile widths.
- Included the Devicon license and logo source attribution alongside the assets.
- Applied the supplied `gdUksy.jpg` artwork to page 4 (Experience) and page 5 (Skills), stored locally as `public/images/blue-abstract-background.jpg`, with responsive cover sizing and a dark overlay for readable text.

### Validation

- ESLint and TypeScript checks passed during implementation; whitespace checks passed after the final badge changes.
- Headless Chrome checks covered mobile, tablet, and desktop widths from 320px to 2560px, confirming page isolation, full-width layout, and no horizontal document overflow.
- Verified wheel navigation, internal scrolling, keyboard navigation, section links, browser back, direct hash links, reduced motion, the mobile swipe handler, and mobile menu navigation.
- Checked BMW image geometry at 390px, 1440px, and 2560px to confirm the car silhouette stays within the screen bounds.
- Verified project arrow placement, pagination, disabled states, and show-all behavior at 320px, 390px, 768px, 1440px, and 2560px.
- ESLint, TypeScript, and the production build passed after adding the technology logos; validated all 23 downloaded SVG files.
- ESLint passed after the background changes, and matching SHA-256 hashes confirmed the local background copy matches the supplied image. The production build was not rerun after the background-only changes.

## Version 1.1 — 2026-09-28

### Design and typography

- Combined the BMW M3 theme with Messi and Argentina imagery, promoting concept 4 to the main homepage.
- Added the Messi celebration photo as a darkened About section background while preserving the portrait, biography, education, and experience content.
- Replaced the personal portrait with the supplied `IMG_7884.jpeg`.
- Added comparison previews at `/concepts/3` and `/concepts/4` with a design switcher.
- Applied Roboto Condensed throughout the site using the Next.js font loader.
- Increased text sizes by approximately 4px across desktop and mobile styles.
- Updated the footer to reflect both BMW M and soccer inspiration.

### Dependencies and deployment

- Upgraded Next.js and `eslint-config-next` from 15.1.6 to 15.5.26 to address the vulnerable Next.js release blocked by Vercel.
- Updated React and React DOM to 19.3.0 and regenerated the npm lockfile.
- Separate transitive dependency advisories remain in the npm audit; this release does not represent a clean security audit.

### Validation

- Production build, ESLint, and TypeScript checks passed after the dependency update.
- Confirmed successful HTTP responses for the homepage and both concept previews during implementation.

## 2026-09-28 — Initial redesign

### Initial setup

- Created this file at the user's request. No website changes were made at that stage.

### Approved immersive BMW redesign — first implementation

Authorization: after reviewing the concept, the user said, "okay do this, lets see it".

- Rebuilt the page around a dark BMW M3 theme with blue accents, a cinematic car hero, side-profile project banner, and cockpit contact section.
- Added sticky navigation, mobile menu, active section indicators, a skip link, visible keyboard focus, and reduced-motion support.
- Added three locally hosted, AI-generated M3-inspired WebP images (about 388 KiB combined). These are illustrative images, not exact 2027 vehicle renders.
- Replaced the old bio with resume-based education and engineering experience, including Walmart Global Tech / Sam's Club work and pilot-club impact metrics.
- Added categorized skills, additional retail experience, and recognition from the supplied resume.
- Copied the supplied resume to `public/Aalvee_Ahtav_Resume.pdf` and connected both resume links to it.
- Removed Weather App from the displayed projects. Its original image remains on disk.
- Retained FinSight AI, Flight Plan, Complex Navigation Game, Aim Trainer, and Spooderman Hangman. Restored CardiCrew from the supplied screenshot and resume because it was absent from the checked-out source.
- Added project pagination and a show-all control for all six projects.
- Preserved known GitHub, LinkedIn, and email destinations. CardiCrew uses a contact link pending its repository URL, with an illustrated title cover pending its screenshot.
- Moved the existing portrait to the About section. A replacement portrait is still pending user input.
- Replaced template metadata with Aalvee's identity and content; removed placeholder social metadata and nonexistent image references.
- Fixed the lint command to use ESLint directly with the existing Next.js 15 configuration.

### Validation

- Production build passed after network access was approved for the existing Geist fonts.
- ESLint and TypeScript checks passed.
- Headless Chrome checks passed at widths of 320, 390, 768, 1024, and 1440 pixels with no horizontal overflow.
- Verified project pagination, all six projects, Weather App removal, PDF response, mobile navigation, experience disclosure, reduced motion, image loading, and absence of runtime errors.
- Reviewed desktop and mobile screenshots. The local production preview runs at http://localhost:3000.
- Image paths and full generation prompts are recorded in `docs/design-assets.md`.

### Follow-up assets

- New portrait from the user.
- CardiCrew screenshot and repository URL were recovered from the remote branch during the merge below.
- Exact original BMW image files can replace the generated illustrations if desired.

### Merge conflict resolution

Authorization: the user requested resolving the merge conflicts and pushing to Git.

- Resolved conflicts in HeroSection and ProjectsSection by preserving the approved BMW redesign and the supplied local resume PDF.
- Integrated the remote CardiCrew screenshot (`public/blackheart.png`), repository URL, and complete technology list into the redesigned card.
- Retained all six selected projects and kept Weather App removed.
- Validation: production build, lint, and type checking passed after conflict resolution.
