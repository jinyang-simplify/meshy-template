# Meshy Template Discovery — Interactive Demo

A front-end product concept that moves Templates out of the Community feed and gives them a dedicated discovery experience.

## What is included

- Existing-style Meshy homepage shell
- A new global **Templates** navigation item
- A homepage template recommendation rail with **View all templates**
- Independent template catalog with search, subject filters, and outcome filters
- Hover previews, saved state, and template detail modal
- Local image upload/preview
- Simulated generation progress and a pre-generated result state
- Responsive desktop and mobile layouts

## Prototype boundary

This prototype intentionally does **not** call the Meshy generation API. Generation is simulated with pre-generated assets so the demo can focus on validating discovery, comparison, selection, and the handoff into creation.

## Run locally

```bash
npm install
npm run dev
```

Build the production bundle with:

```bash
npm run build
```

## Main flow

1. Start on the homepage.
2. Use the global `Templates` navigation or the homepage `View all templates` action.
3. Search or filter the dedicated template catalog.
4. Open a template and inspect its input requirements.
5. Upload an image or use a sample.
6. Complete the simulated generation flow.

## Asset note

Template visuals in this interview concept are locally stored references from Meshy's public Creative Lab experience. They are used only to make the product flow representative of the existing Meshy ecosystem.
