# AGENTS.md

Guidelines for Codex when working on this website project.

This project is a React + Vite + TailwindCSS brand website. Prioritize visual quality, stability, and minimal safe changes.

## Core Working Rules

### Think Before Coding

Before making non-trivial changes:
- State assumptions clearly.
- If the request can be interpreted in multiple ways, explain the options before editing.
- Prefer the simplest implementation that satisfies the request.
- Push back if a requested change may break layout, responsiveness, image loading, or existing content structure.

### Simplicity First

- Do not add unnecessary libraries.
- Do not introduce complex abstractions for simple UI changes.
- Reuse existing components, styles, and layout patterns where possible.
- Keep changes readable and maintainable.

### Surgical Changes

- Only edit files required by the user request.
- Do not refactor unrelated components.
- Do not rename variables, components, assets, or routes unless required.
- Do not reformat unrelated files.
- Preserve existing copy, images, links, and language switching behavior unless asked to change them.
- If unrelated issues are noticed, report them instead of changing them.

### Visual Consistency

- Maintain a polished brand-site look.
- Avoid sparse layouts, excessive whitespace, mismatched card sizes, or inconsistent image proportions.
- Product cards in the same section should align visually.
- Use responsive layouts for desktop and mobile.
- Prefer clean spacing, consistent border radius, soft shadows, and clear hierarchy.
- For product sections, ensure images, titles, descriptions, and CTA areas align consistently.

### Asset and Image Handling

- Do not change image filenames or paths unless necessary.
- Verify that imported assets are referenced correctly.
- Avoid external image links when local project assets already exist.
- Preserve product bottle proportions unless the user explicitly asks to resize or crop them.
- Do not distort product images.

### Verification

After changes:
- Inspect `package.json` to find the correct build, lint, or type-check command.
- Run the existing build, lint, or type-check command if available.
- Summarize:
  - what files changed;
  - what changed visually or functionally;
  - how the result was verified;
  - any remaining risks or manual checks needed.

## Dependency Rule

Do not install new dependencies without asking first.

## Done Means

A task is done only when:
- the requested change is implemented;
- unrelated files are untouched;
- the page remains responsive;
- the build/check passes or the reason it could not be run is clearly stated.
