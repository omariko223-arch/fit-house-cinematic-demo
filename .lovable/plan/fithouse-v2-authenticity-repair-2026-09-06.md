# FitHouse V2 Authenticity Repair

## Goal
Preserve the approved V2 structure, typography, color system, motion, spacing, and interactions while ensuring the page never presents generated gym imagery as the real FitHouse.

## Asset audit result
- No user-supplied real FitHouse photos or trainer graphics are currently accessible in the project, workspace upload area, or existing asset folders.
- The referenced files `123259`, `123226`, `123348`, `123235`, `123247`, `123000`, `123024`, `123200`, `123211`, `123039`, and `123102` are not available.
- Existing gym, tour, community, night, and trainer JPEGs are generated placeholders from the earlier demo.
- Therefore, this pass will not replace the hero or any section with invented imagery and will not identify any trainer from an unverified graphic.

## Changes
1. **Preserve the approved V2 design**
   - Keep all section order, typography, colors, layouts, motion, membership interaction, schedule filtering, navigation, and cinematic styling.
   - Make only authenticity, safety, formatting, and accessibility corrections.

2. **Make generated imagery unmistakably non-factual**
   - Retain current generated visuals only where removing them would break the approved composition, but label them centrally as demo/concept placeholders rather than real FitHouse photography.
   - Keep trainer cards as unnamed/neutral portrait slots because verified graphics are unavailable.
   - Preserve the virtual-tour label exactly: “Concept preview — not a 360° capture.”
   - Ensure alt text does not describe generated scenes as actual FitHouse spaces.

3. **Centralize real-asset replacement hooks**
   - Keep one data module as the source for discipline, trainer, and virtual-tour imagery.
   - Add clear mapping notes for the requested asset IDs so each real photo can be inserted without changing section layouts.
   - Keep C/Youssef, Coach A. Mosaad, and Coach Kadnil unassigned until their actual verified graphics are present.

4. **Safety and formatting repair**
   - Remove remaining unsafe array assumptions in the disciplines and tour sections with explicit empty-data guards.
   - Format touched files without changing the approved presentation.
   - Fix any lint or type issues found by the requested checks.

5. **Verification**
   - Run the production build, TypeScript checks, and lint using the project scripts.
   - Verify desktop and mobile previews, including hero, training, tour, trainer drawer, membership promo, schedule filters, and navigation.
   - Capture preview images of the updated sections.

## Delivery notes
- Report every generated asset that remains and why it remains.
- Explicitly list all inaccessible real asset IDs.
- Do not publish, deploy, or begin V3.

## Technical details
- No generated or edited replacement images will be created in this pass.
- Existing visual components remain in place; authenticity status and replacement metadata will be represented in the shared FitHouse data layer.
- If a generated image has no suitable real replacement, it stays only as a clearly disclosed demo placeholder or is replaced by the existing abstract texture treatment when that can be done without redesigning the section.