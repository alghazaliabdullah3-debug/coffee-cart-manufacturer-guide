# Coffee Cart — Revision D manufacturer guide

A self-contained, metric-first manufacturer website with English content, one shared WebGL model, dimension overlays, selectable components, a dimensioned orthographic plan, fabrication review notes, printable pages, view-image export, shareable view links, and the corrected Revision D PDFs.

## Use

Live site: https://alghazaliabdullah3-debug.github.io/coffee-cart-manufacturer-guide/

Primary units are **mm**. All labels, units and manufacturer notes are in English. Body depth means front-to-back, not cabinet length. Green badges identify client, calculated or retained reference dimensions; amber badges identify proposed details.

The outward 304.8 mm serving ledge follows the rear and both full ends. The operator edge remains open. Feature 9 is an **empty 254 mm side-to-side × 355.6 mm front-to-back opening** for the owner's existing sink. Features 3, 4, 5 and 7 are removed. Every 3D angle uses the same mesh. The updated SR / coffee-branch / STUDIO ROAST logo appears as white LED on the customer rear and engraved into the operator-facing walnut; sign scale and placement are proposed.

## Preview and offline use

No installation, API keys, analytics, remote fonts, frameworks or third-party CDNs are required. To open without a server, double-click `docs/offline.html` after extracting the full ZIP. Keep the assets and downloads folders alongside it.

For development with Python installed:

```sh
python -m http.server 8080 --directory docs
```

Then open http://localhost:8080. A local server is needed for the modular `index.html`; the generated `offline.html` embeds all code and styles.

## GitHub Pages

Publish the `docs/` folder on the `main` branch (Settings → Pages → Deploy from a branch). All asset paths are relative, so this works at a project Pages URL without a build step. `.nojekyll` disables Jekyll processing.

## Files

- `docs/index.html`, `style.css`: layout, responsive and print styles.
- `docs/model.js`: one geometry model, millimetre coordinates, WebGL renderer, auto-fit camera and component highlighting.
- `docs/content.js`: English labels, dimensions and fabrication notes.
- `docs/app.js`: controls, annotated 3D views, top plan, PNG export and view links.
- `docs/downloads/`: corrected 4-page package, vector blueprints, English brief and structured dimensions.
- `docs/assets/`: existing Revision D reference images.
- `scripts/build_offline.mjs`: regenerate the offline entry after editing site files.

```sh
node scripts/build_offline.mjs
```

Run the geometry and asset checks with `node scripts/verify.mjs`. They verify the three-sided ledge, empty sink opening, six fitted views, dimension data and local asset links.

## Fabrication status

This is a design-intent guide, **not final production CAD or certified shop drawings**. Guard height, ledge elevation, opening positions, tool-well sizes, cabinet modules, corner radii, sheet gauges, steel grade, brackets, loads and caster selection require manufacturer confirmation. The sink cutout orientation is X=254 mm (10 in W) and Y=355.6 mm (14 in L), and must be checked against the owner's actual sink template. No final manufacturing tolerances are assigned.

The original reference offers 201/304 stainless steel and 1.2/2.0/3.0 mm gauge options; it does not select a grade or assign gauges to parts. Rendered edge thickness is a visual build-up, not a sheet-gauge instruction.

No personal contact information or credentials are included.


## Component inspection and explosion

All 27 retained components and opening references have numbered labels, nominal assembled dimensions, projected dimension lines and a persistent measurement readout. Select a numbered label, chip or dropdown entry to orient and focus the part. Use **Explode cart**, the 0–100% separation slider and **Isolate selected** for inspection; **Reassemble cart** restores the exact original geometry.

Exploded gaps are illustrative and never become fabrication dimensions. Sink opening 9 and rear holes 8 stay with worktop 16; engraving 15 remains on walnut fascia 23. The sink is never represented as a supplied basin. Unknown sheet gauges, depths, hardware and loads remain to be confirmed. New cabinet and hardware dimensions are proposed model references, not newly approved client specifications.

`docs/components.js` is the shared catalogue for labels, measurement readouts, exploded offsets, dimension lines, CSV and structured downloads. `docs/inspection-ui.js` lays out the numbered labels and annotations. `scripts/build_component_schedule.mjs` refreshes the component CSV, JSON and English brief. Run `npm run build` to refresh the schedules and offline entry; `npm test` checks geometry, inspection and exact reassembly.
