# Changelog

This file tracks changes made during the portfolio redesign. Update it whenever an approved change is completed.

## Approval requirement

- Ask the user before making further changes or taking important actions outside the approved scope.
- Discuss the proposed scope and wait for explicit approval before proceeding.
- Include a changelog update with each approved change.

## 2026-09-28

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
- CardiCrew screenshot and repository URL.
- Exact original BMW image files can replace the generated illustrations if desired.
