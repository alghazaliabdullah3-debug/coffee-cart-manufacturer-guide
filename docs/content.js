import {components} from './components.js';
export const copy = {
  "brandSub": "MANUFACTURER GUIDE · REV D",
  "navExplore": "3D explorer",
  "navPlan": "Dimensions",
  "navBuild": "Builder notes",
  "navDocs": "Documents",
  "introEyebrow": "STUDIO ROAST / COFFEE CART / REVISION D",
  "title": "Your cart.<br> From every angle.",
  "introCopy": "Explore the form, inspect the dimensions, and hand your manufacturer one clear English-language design.",
  "units": "PRIMARY UNITS: mm<br>Length × Depth × Height",
  "designStage": "Design intent · Factory review",
  "exploreTitle": "Explore the cart",
  "viewIso": "Perspective",
  "viewFront": "Operator",
  "viewRear": "Customer rear",
  "viewLeft": "Left end",
  "viewRight": "Right end",
  "viewTop": "Top",
  "oneModel": "ONE SHARED MODEL",
  "fallback": "3D is unavailable on this device. Use the top plan and the complete drawings below.",
  "gesture": "Drag to rotate · Scroll to zoom",
  "fit": "Fit view",
  "showDims": "Dimensions",
  "hideLedge": "Hide guard & ledge",
  "spin": "Auto rotate",
  "pause": "Pause rotation",
  "saveView": "Save view ↓",
  "ledgeRule": "U-shaped ledge: rear + both ends, operator side open. Green indicates selection only.",
  "inspect": "INSPECT A COMPONENT",
  "inspectTop": "Inspect in top plan ↗",
  "orientation": "FRONT is the barista / operator side.<br>REAR is the customer serving side.",
  "bodySize": "BODY · LENGTH × DEPTH",
  "bodySizeSub": "Client specified · 6 ft × 3.5 ft",
  "projection": "OUTWARD LEDGE PROJECTION",
  "projectionSub": "Client specified · Three sides · 12 in",
  "envelope": "OVERALL ENVELOPE · LENGTH × DEPTH",
  "envelopeSub": "Calculated from body + outward ledge",
  "planEyebrow": "MEASURE / CUTOUT LAYOUT",
  "planTitle": "A place for every detail.",
  "blueprintBtn": "Open blueprint ↗",
  "topPlan": "TOP PLAN",
  "originNote": "Origin O: operator-front-left body corner",
  "planNote": "Select a numbered feature. Positions are proposed; verify against actual fittings and the sink template.",
  "schedule": "Countertop opening schedule",
  "coordinateNote": "X runs right; Y runs rearward. Rectangles use their front-left corner; round holes use their centre. Coordinates in mm.",
  "sinkAlertTitle": "9 is an empty sink opening only",
  "sinkAlert": "254 mm side-to-side (X) × 355.6 mm front-to-back (Y). This is a 10 in W × 14 in L opening for the owner-supplied sink. No basin is included. Verify the actual installation template before cutting.",
  "dimSchedule": "Dimension schedule · All dimensions in mm unless noted",
  "item": "Item",
  "dimension": "Dimension",
  "status": "Status / basis",
  "buildEyebrow": "FABRICATION / DESIGN HANDOFF",
  "buildTitle": "Built from a clear brief.",
  "print": "Print builder brief ↗",
  "intentTitle": "Design details to preserve",
  "reviewTitle": "Confirm before fabrication",
  "reviewBanner": "This guide communicates design intent. Green labels identify client or reference dimensions; amber labels identify proposals. Before cutting, the manufacturer must provide final shop drawings confirming sheet gauges, supports, installation tolerances and load capacity.",
  "docsEyebrow": "ONE REVISION / COMPLETE REFERENCE",
  "docsTitle": "Take the complete design.",
  "docsRevision": "Revision D · Updated logo, walnut engraving & corrected sink",
  "pages": "pages",
  "fullPackage": "Complete design package",
  "fullPackageSub": "Current metric blueprints, model views & branding details",
  "blueprints": "Dimensioned blueprints",
  "blueprintsSub": "Current metric plans, elevations & fabrication notes",
  "sketch": "Manufacturer brief",
  "sketchSub": "English design intent & items for factory review",
  "jsonDownload": "Dimension data · JSON ↓",
  "briefDownload": "English manufacturer brief · TXT ↓",
  "share": "Copy this view link ↗",
  "footer": "Metric dimensions · English throughout · One model for all views<br>Design reference; final fabrication requires shop drawings.",
  "copied": "View link copied. Ready to share with your manufacturer.",
  "copyFail": "Copy the link from your browser address bar.",
  "saved": "Current view saved.",
  "confirmed": "CLIENT SPECIFIED",
  "proposed": "PROPOSED · VERIFY",
  "reference": "RETAINED REFERENCE",
  "calculated": "CALCULATED",
  "frontOpen": "OPERATOR SIDE OPEN · NO FOURTH LEDGE",
  "rearSide": "REAR / CUSTOMER",
  "frontSide": "FRONT / OPERATOR",
  "bodyLabel": "BODY",
  "overallLabel": "OVERALL",
  "heightLabel": "WORKTOP H",
  "proposedHeight": "PROPOSED H",
  "xDirection": "X RIGHT",
  "yDirection": "Y REARWARD",
  "removed": "REMOVED: 3, 4, 5, 7",
  "part": "COMPONENT",
  "location": "LOCATION",
  "lengthDepth": "L × D"
};

export const dimensions = [
  [
    "Main body · L × D",
    "1828.8 × 1066.8",
    "confirmed",
    "6 ft × 3.5 ft"
  ],
  [
    "Floor to worktop (including casters)",
    "1000",
    "reference",
    "Retained from original reference"
  ],
  [
    "Ledge projection · rear + both ends",
    "304.8",
    "confirmed",
    "12 in, outward"
  ],
  [
    "Overall envelope · L × D",
    "2438.4 × 1371.6",
    "calculated",
    "Body L + 2 × projection; body D + projection"
  ],
  [
    "Guard rise above worktop",
    "150",
    "proposed",
    "Final height not yet specified"
  ],
  [
    "Floor to serving ledge top",
    "1150",
    "proposed",
    "1000 + 150"
  ],
  [
    "9 Sink opening · W(X) × L(Y)",
    "254 × 355.6",
    "confirmed",
    "10 in side-to-side × 14 in front-to-back; verify supplied sink template"
  ],
  [
    "6 Knockbox opening · L × D",
    "138 × 150",
    "confirmed",
    "Box depth to confirm"
  ],
  [
    "Cabinet modules · operator left to right",
    "580 / 220 / 520 / 508.8",
    "proposed",
    "Storage / cups / equipment bay / sink base"
  ],
  [
    "Rear guard inner corner radius",
    "R40",
    "proposed",
    "Corresponding outer ledge edge ≈ R344.8"
  ],
  [
    "Rear LED logo · maximum artwork area",
    "900 W × 700 H",
    "proposed",
    "Proportional artwork; proposed centre 600 mm above floor"
  ],
  [
    "Operator walnut engraving · maximum artwork area",
    "210 W × 145 H",
    "proposed",
    "Centred on existing 750 × 175 mm walnut fascia"
  ]
];

export const intent = [
  "Keep the stainless cabinet, left walnut fascia, two round cup dispensers, central open equipment bay and four casters.",
  "Run the 304.8 mm outward serving ledge along the rear and both ends. Leave the operator side open in every view.",
  "Features 3, 4, 5 and 7 are removed. Keep the left and central worktop clear.",
  "Put knockbox 6 at the front-left. Move tool wells 1 and 2 beside the far-right sink opening.",
  "Feature 9 is a cutout for the owner’s existing sink. No added rinser nozzle, basin, faucet or drain.",
  "Retain the walnut rear armrest and left folding wing. The model shows the wing stowed.",
  "Use the updated SR monogram with coffee branch and STUDIO ROAST name: white LED on the customer rear and engraved directly into the operator-facing walnut fascia."
];

export const parts = components;

export const review = [
  "Material: the source offers 201 / 304 stainless steel; the final grade has not been selected. Quote and confirm.",
  "Sheet gauges: source options are 1.2 / 2.0 / 3.0 mm, unassigned to parts. Model edge build-up does not specify sheet gauge.",
  "Confirm the proposed 150 mm guard height, ledge elevation, corner radii, edge returns, welds and brackets; verify serving loads.",
  "Verify final cutouts, corner radii, flanges, seals, removal space and plumbing against the actual sink and knockbox.",
  "Check cabinet modules, hinges, cup dispensers, equipment clearance and the folding wing against the new ledge.",
  "Confirm caster size, brakes, total load, frame stability, transport conditions and manufacturing tolerances. Submit final shop drawings for owner approval.",
  "Confirm LED logo scale, minimum stroke sizes, standoffs, driver, wiring and service access. Confirm engraving depth, fine-line detail, artwork position and finish on the walnut fascia."
];