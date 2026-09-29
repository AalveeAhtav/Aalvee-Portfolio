# Agent instructions

These instructions apply to all agents working in this repository.

## Approval before changes

- Always ask the user for approval before making changes. Explain the proposed scope and wait for explicit approval before editing files, changing dependencies, committing, pushing, deploying, or otherwise modifying project state.
- A direct user instruction to make a specific change counts as approval for that change. Do not ask for the same permission again; stay within the explicitly requested scope.
- Read-only inspection and analysis may proceed without approval. If additional changes are needed outside the approved scope, ask first.

## Changelog and release versions

- When the user asks to update `changelog.md`, create the next release entry and increment the latest recorded version by one minor step.
- Use a two-part `major.minor` version with a single minor digit from 0 through 9. Treat these as version components, not decimal numbers.
- The current release is **1.1**. The next requested changelog update must be **1.2**, followed by **1.3**, and so on. After **1.9**, use **2.0**, then **2.1**. Apply the same rollover for future major versions.
- Read the latest version in `changelog.md` each time; it is the source of truth as releases progress.
- Increment once per requested changelog update, not once per file or individual change. Corrections within the same update do not cause additional increments.
- Preserve previous release entries. Summarize completed changes and actual validation results under the new version and date.
- Do not change package versions or create Git tags unless the user explicitly requests that separately.
