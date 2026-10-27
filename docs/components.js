// Nominal assembled dimensions in mm. Exploded offsets are illustrative only.
export const components = [
  {
    "id": 1,
    "tab": "1 Tool well",
    "name": "Rectangular tool well by sink",
    "measure": "100 × 230",
    "status": "proposed",
    "note": "Feature 1 moves beside the sink on its left. Opening 100 × 230 mm and position X=1210, Y=270 are proposed; match the selected tool well. The model represents the plan opening and rim; well depth must match the selected fitting.",
    "point": [
      1260,
      385,
      1005
    ],
    "x": 1210,
    "y": 270,
    "l": 100,
    "d": 230,
    "home": "top",
    "category": "top",
    "bounds": [
      [
        1207,
        267,
        995
      ],
      [
        1313,
        503,
        1005
      ]
    ],
    "explode": [
      -130,
      230,
      700
    ],
    "measurements": [
      {
        "label": "Opening · X × Y",
        "value": "100 × 230 mm",
        "status": "proposed"
      },
      {
        "label": "Position · X / Y",
        "value": "1210 / 270 mm",
        "status": "proposed"
      },
      {
        "label": "Well depth / flange",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          1210,
          250,
          1010
        ],
        "b": [
          1310,
          250,
          1010
        ],
        "text": "100 mm",
        "status": "proposed"
      },
      {
        "a": [
          1335,
          270,
          1010
        ],
        "b": [
          1335,
          500,
          1010
        ],
        "text": "230 mm",
        "status": "proposed"
      }
    ],
    "group": 1
  },
  {
    "id": 2,
    "tab": "2 Round well",
    "name": "Round tool well by sink",
    "measure": "Ø90",
    "status": "proposed",
    "note": "Feature 2 sits in front of 1, beside the sink. Diameter and centre X=1260, Y=155 are proposed. Plain round well; no cup-rinser nozzle. The model represents the plan opening and rim; well depth must match the selected fitting.",
    "point": [
      1260,
      155,
      1005
    ],
    "x": 1260,
    "y": 155,
    "diameter": 90,
    "home": "top",
    "category": "top",
    "bounds": [
      [
        1210,
        105,
        995
      ],
      [
        1310,
        205,
        1005
      ]
    ],
    "explode": [
      300,
      -150,
      650
    ],
    "measurements": [
      {
        "label": "Opening diameter",
        "value": "Ø90 mm",
        "status": "proposed"
      },
      {
        "label": "Centre · X / Y",
        "value": "1260 / 155 mm",
        "status": "proposed"
      },
      {
        "label": "Well depth / rim",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          1215,
          155,
          1010
        ],
        "b": [
          1305,
          155,
          1010
        ],
        "text": "Ø90 mm",
        "status": "proposed"
      }
    ],
    "group": 2
  },
  {
    "id": 6,
    "tab": "6 Knockbox",
    "name": "Front-left knockbox opening",
    "measure": "138 × 150",
    "status": "confirmed",
    "note": "At the operator-front-left corner. 138 mm along X; 150 mm along Y. Proposed position X=90, Y=90. Box depth, flange and removal method remain to be confirmed. Exploded geometry represents the opening trim and knock bar; box depth is unspecified.",
    "point": [
      159,
      165,
      1015
    ],
    "x": 90,
    "y": 90,
    "l": 138,
    "d": 150,
    "home": "top",
    "category": "top",
    "bounds": [
      [
        87,
        87,
        995
      ],
      [
        231,
        243,
        1020
      ]
    ],
    "explode": [
      -320,
      -250,
      600
    ],
    "measurements": [
      {
        "label": "Opening · X × Y",
        "value": "138 × 150 mm",
        "status": "confirmed"
      },
      {
        "label": "Position · X / Y",
        "value": "90 / 90 mm",
        "status": "proposed"
      },
      {
        "label": "Box depth / flange",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          90,
          70,
          1020
        ],
        "b": [
          228,
          70,
          1020
        ],
        "text": "138 mm",
        "status": "confirmed"
      },
      {
        "a": [
          250,
          90,
          1020
        ],
        "b": [
          250,
          240,
          1020
        ],
        "text": "150 mm",
        "status": "confirmed"
      }
    ],
    "group": 6
  },
  {
    "id": 8,
    "tab": "8 Rear holes",
    "name": "Rear service / parasol holes",
    "measure": "3 × Ø30",
    "status": "proposed",
    "note": "Three rear holes: centre X=660 / 1100 / 1540, Y=896.8. Ø30 is a visual proposal; confirm sizes, locations and use against selected hardware.",
    "point": [
      1100,
      896.8,
      1005
    ],
    "x": [
      660,
      1100,
      1540
    ],
    "y": 896.8,
    "diameter": 30,
    "home": "top",
    "category": "top",
    "group": 16,
    "bounds": [
      [
        630,
        865,
        990
      ],
      [
        1570,
        925,
        1010
      ]
    ],
    "explode": [
      0,
      0,
      400
    ],
    "measurements": [
      {
        "label": "Quantity / opening",
        "value": "3 × Ø30 mm",
        "status": "proposed"
      },
      {
        "label": "X centres",
        "value": "660 / 1100 / 1540 mm",
        "status": "proposed"
      },
      {
        "label": "Y centre / X spacing",
        "value": "896.8 / 440 mm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          1085,
          896.8,
          1010
        ],
        "b": [
          1115,
          896.8,
          1010
        ],
        "text": "Ø30 mm",
        "status": "proposed"
      },
      {
        "a": [
          660,
          940,
          1010
        ],
        "b": [
          1100,
          940,
          1010
        ],
        "text": "440 mm centres",
        "status": "proposed"
      }
    ]
  },
  {
    "id": 9,
    "tab": "9 Sink",
    "name": "Sink opening · cutout only",
    "measure": "254 × 355.6",
    "status": "confirmed",
    "note": "10 in W side-to-side (X) × 14 in L front-to-back (Y). Owner supplies the sink; no basin is installed. Proposed position X=1370, Y=220. Confirm final cutout against the existing sink flange/template. No bowl depth is specified.",
    "point": [
      1497,
      397.8,
      1003
    ],
    "x": 1370,
    "y": 220,
    "l": 254,
    "d": 355.6,
    "home": "top",
    "category": "top",
    "group": 16,
    "bounds": [
      [
        1370,
        220,
        975
      ],
      [
        1624,
        575.6,
        1005
      ]
    ],
    "explode": [
      0,
      0,
      400
    ],
    "measurements": [
      {
        "label": "Width · side-to-side X",
        "value": "254 mm / 10 in",
        "status": "confirmed"
      },
      {
        "label": "Length · front-to-back Y",
        "value": "355.6 mm / 14 in",
        "status": "confirmed"
      },
      {
        "label": "Position · X / Y",
        "value": "1370 / 220 mm",
        "status": "proposed"
      },
      {
        "label": "Bowl / depth",
        "value": "Not supplied · opening only",
        "status": "reference"
      }
    ],
    "lines": [
      {
        "a": [
          1370,
          195,
          1010
        ],
        "b": [
          1624,
          195,
          1010
        ],
        "text": "254 mm W (X)",
        "status": "confirmed"
      },
      {
        "a": [
          1650,
          220,
          1010
        ],
        "b": [
          1650,
          575.6,
          1010
        ],
        "text": "355.6 mm L (Y)",
        "status": "confirmed"
      }
    ]
  },
  {
    "id": 10,
    "tab": "Guard",
    "name": "Three-sided stainless guard",
    "measure": "150",
    "status": "proposed",
    "note": "Runs along the rear and full depth of both ends, stopping about 25 mm from the front. The 150 mm rise is proposed. The serving ledge sits at the guard top.",
    "point": [
      0,
      700,
      1090
    ],
    "home": "iso",
    "category": "upper",
    "bounds": [
      [
        0,
        25,
        1000
      ],
      [
        1828.8,
        1066.8,
        1150
      ]
    ],
    "explode": [
      0,
      0,
      850
    ],
    "measurements": [
      {
        "label": "Rise above worktop",
        "value": "150 mm",
        "status": "proposed"
      },
      {
        "label": "Guard path · L × D",
        "value": "1828.8 × 1041.8 mm",
        "status": "proposed"
      },
      {
        "label": "Rear corner / front setback",
        "value": "R40 / 25 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet gauge",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          0,
          500,
          1000
        ],
        "b": [
          0,
          500,
          1150
        ],
        "text": "150 mm rise",
        "status": "proposed"
      },
      {
        "a": [
          0,
          1066.8,
          1160
        ],
        "b": [
          1828.8,
          1066.8,
          1160
        ],
        "text": "1828.8 mm",
        "status": "proposed"
      }
    ],
    "group": 10
  },
  {
    "id": 11,
    "tab": "Ledge",
    "name": "U-shaped serving ledge",
    "measure": "304.8",
    "status": "confirmed",
    "note": "Projects 304.8 mm OUTWARD from the rear and both end guards. Operator edge remains open. Top elevation 1150 mm is proposed; edge build-up and supports require factory design.",
    "point": [
      914.4,
      1371.6,
      1150
    ],
    "home": "iso",
    "category": "upper",
    "bounds": [
      [
        -304.8,
        25,
        1130
      ],
      [
        2133.6,
        1371.6,
        1150
      ]
    ],
    "explode": [
      0,
      0,
      1250
    ],
    "measurements": [
      {
        "label": "Outward usable projection",
        "value": "304.8 mm / 12 in",
        "status": "confirmed"
      },
      {
        "label": "Overall · L × D",
        "value": "2438.4 × 1371.6 mm",
        "status": "calculated"
      },
      {
        "label": "Assembled top elevation",
        "value": "1150 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet gauge / folded edge",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          -304.8,
          700,
          1150
        ],
        "b": [
          0,
          700,
          1150
        ],
        "text": "304.8 mm outward",
        "status": "confirmed"
      },
      {
        "a": [
          -304.8,
          1400,
          1150
        ],
        "b": [
          2133.6,
          1400,
          1150
        ],
        "text": "2438.4 mm overall",
        "status": "calculated"
      }
    ],
    "group": 11
  },
  {
    "id": 12,
    "tab": "Wood rail",
    "name": "Retained walnut rear rail",
    "measure": "50 × 25",
    "status": "proposed",
    "note": "Retains the original walnut rear armrest below the stainless serving ledge. Section 50 × 25 mm, about 80 mm projection and short end returns are proposed.",
    "point": [
      914.4,
      1121.8,
      1000
    ],
    "home": "rear",
    "category": "upper",
    "bounds": [
      [
        -80,
        816.8,
        975
      ],
      [
        1908.8,
        1146.8,
        1000
      ]
    ],
    "explode": [
      0,
      460,
      430
    ],
    "measurements": [
      {
        "label": "Rail section",
        "value": "50 × 25 mm",
        "status": "proposed"
      },
      {
        "label": "Overall length / rear extent",
        "value": "1988.8 / 80 mm",
        "status": "proposed"
      },
      {
        "label": "Short side returns",
        "value": "250 mm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          -80,
          1146.8,
          1000
        ],
        "b": [
          1908.8,
          1146.8,
          1000
        ],
        "text": "1988.8 mm overall",
        "status": "proposed"
      },
      {
        "a": [
          914.4,
          1096.8,
          1000
        ],
        "b": [
          914.4,
          1146.8,
          1000
        ],
        "text": "50 mm rail",
        "status": "proposed"
      }
    ],
    "group": 12
  },
  {
    "id": 13,
    "tab": "Wood wing",
    "name": "Left walnut folding wing",
    "measure": "300 × 420",
    "status": "proposed",
    "note": "Retains the original left folding wood wing, shown stowed beneath the new ledge. Proposed deployed projection 300 mm, depth 420 mm. Confirm hardware, deployed position and clearances.",
    "point": [
      -25,
      210,
      825
    ],
    "home": "left",
    "category": "wood",
    "bounds": [
      [
        -25,
        0,
        675
      ],
      [
        0,
        420,
        975
      ]
    ],
    "explode": [
      -550,
      0,
      100
    ],
    "measurements": [
      {
        "label": "Wood panel / deployed reach",
        "value": "300 × 420 mm / 300 mm",
        "status": "proposed"
      },
      {
        "label": "Current position",
        "value": "Folded vertically",
        "status": "reference"
      },
      {
        "label": "Wood gauge / hinges",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          -30,
          0,
          675
        ],
        "b": [
          -30,
          0,
          975
        ],
        "text": "300 mm panel",
        "status": "proposed"
      },
      {
        "a": [
          -30,
          0,
          975
        ],
        "b": [
          -30,
          420,
          975
        ],
        "text": "420 mm",
        "status": "proposed"
      }
    ],
    "group": 13
  },
  {
    "id": 14,
    "tab": "LED logo",
    "name": "Studio Roast · white LED logo",
    "measure": "900 × 700 max",
    "status": "proposed",
    "point": [
      914.4,
      1086.8,
      680
    ],
    "note": "The updated SR monogram, coffee branch and STUDIO ROAST name appear in white LED light on the customer rear. Artwork is fitted proportionally within a proposed 900 W × 700 H mm area, centred at 600 mm above floor. Confirm final size, mounting, minimum stroke sizes, driver and concealed wiring with the factory.",
    "home": "rear",
    "category": "brand",
    "bounds": [
      [
        464.4,
        1086.8,
        250
      ],
      [
        1364.4,
        1086.8,
        950
      ]
    ],
    "explode": [
      0,
      1000,
      100
    ],
    "measurements": [
      {
        "label": "Maximum artwork area",
        "value": "900 W × 700 H mm",
        "status": "proposed"
      },
      {
        "label": "Model artwork plane",
        "value": "900 × 600 mm",
        "status": "proposed"
      },
      {
        "label": "Centre above floor",
        "value": "600 mm",
        "status": "proposed"
      },
      {
        "label": "Mounts / driver / wiring",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          464.4,
          1095,
          250
        ],
        "b": [
          1364.4,
          1095,
          250
        ],
        "text": "900 mm max W",
        "status": "proposed"
      },
      {
        "a": [
          1395,
          1095,
          250
        ],
        "b": [
          1395,
          1095,
          950
        ],
        "text": "700 mm max H",
        "status": "proposed"
      }
    ],
    "group": 14
  },
  {
    "id": 15,
    "tab": "Wood engraving",
    "name": "Logo engraved into walnut",
    "measure": "210 × 145 max",
    "status": "proposed",
    "point": [
      405,
      -3.6,
      867.5
    ],
    "note": "Engrave the same updated SR / coffee-branch / STUDIO ROAST artwork directly into the operator-facing walnut fascia. Keep the existing wood panel. Proposed artwork fits proportionally within 210 W × 145 H mm, centred on the 750 × 175 mm fascia. Factory to confirm scale, engraving depth, fine-line legibility and clear finish.",
    "home": "front",
    "category": "brand",
    "group": 23,
    "bounds": [
      [
        300,
        -3.6,
        795
      ],
      [
        510,
        -3.6,
        940
      ]
    ],
    "explode": [
      -130,
      -580,
      170
    ],
    "measurements": [
      {
        "label": "Maximum engraving area",
        "value": "210 W × 145 H mm",
        "status": "proposed"
      },
      {
        "label": "Walnut fascia",
        "value": "750 W × 175 H mm",
        "status": "proposed"
      },
      {
        "label": "Engraving depth / fine lines",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "lines": [
      {
        "a": [
          300,
          -12,
          950
        ],
        "b": [
          510,
          -12,
          950
        ],
        "text": "210 mm max W",
        "status": "proposed"
      },
      {
        "a": [
          525,
          -12,
          795
        ],
        "b": [
          525,
          -12,
          940
        ],
        "text": "145 mm max H",
        "status": "proposed"
      }
    ]
  },
  {
    "id": 16,
    "tab": "Worktop",
    "name": "Main worktop",
    "bounds": [
      [
        0,
        0,
        975
      ],
      [
        1828.8,
        1066.8,
        1000
      ]
    ],
    "home": "top",
    "explode": [
      0,
      0,
      400
    ],
    "measurements": [
      {
        "label": "Plan · X × Y",
        "value": "1828.8 × 1066.8 mm",
        "status": "confirmed"
      },
      {
        "label": "Assembled top elevation",
        "value": "1000 mm",
        "status": "reference"
      },
      {
        "label": "Edge build-up in model",
        "value": "25 mm · visual only",
        "status": "proposed"
      },
      {
        "label": "Actual sheet gauge",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "The sink cutout and rear holes remain in this worktop during explosion. The rendered 25 mm edge build-up is not a specified sheet gauge.",
    "lines": [
      {
        "a": [
          0,
          -35,
          1000
        ],
        "b": [
          1828.8,
          -35,
          1000
        ],
        "text": "1828.8 mm",
        "status": "confirmed"
      },
      {
        "a": [
          1860,
          0,
          1000
        ],
        "b": [
          1860,
          1066.8,
          1000
        ],
        "text": "1066.8 mm",
        "status": "confirmed"
      }
    ],
    "point": [
      914.4,
      533.4,
      987.5
    ],
    "group": 16,
    "category": "body",
    "status": "proposed",
    "measure": "1828.8 × 1066.8"
  },
  {
    "id": 17,
    "tab": "Frame",
    "name": "Cabinet frame & equipment bay",
    "bounds": [
      [
        0,
        0,
        100
      ],
      [
        1828.8,
        1066.8,
        975
      ]
    ],
    "home": "iso",
    "explode": [
      0,
      0,
      0
    ],
    "measurements": [
      {
        "label": "Visual assembly · L × D × H",
        "value": "1828.8 × 1066.8 × 875 mm",
        "status": "proposed"
      },
      {
        "label": "Equipment bay clear width",
        "value": "480 mm · model reference",
        "status": "proposed"
      },
      {
        "label": "Members / welds / loads",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Frame, dividers and equipment-bay base are one structural subassembly in the inspection model. Section sizes, welds, clearances and load design require factory shop drawings.",
    "lines": [
      {
        "a": [
          0,
          -30,
          100
        ],
        "b": [
          1828.8,
          -30,
          100
        ],
        "text": "1828.8 mm",
        "status": "proposed"
      },
      {
        "a": [
          1860,
          0,
          100
        ],
        "b": [
          1860,
          0,
          975
        ],
        "text": "875 mm frame",
        "status": "proposed"
      }
    ],
    "point": [
      914.4,
      533.4,
      537.5
    ],
    "group": 17,
    "category": "body",
    "status": "proposed",
    "measure": "1828.8 × 1066.8 × 875"
  },
  {
    "id": 18,
    "tab": "Left door",
    "name": "Left storage door",
    "bounds": [
      [
        30,
        0,
        130
      ],
      [
        290,
        20,
        765
      ]
    ],
    "home": "front",
    "explode": [
      -200,
      -500,
      -20
    ],
    "measurements": [
      {
        "label": "Face · W × H",
        "value": "260 × 635 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet / hinges / gaps",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Dimensions describe the proposed visible door face, not its blank, hem, hinge or sheet gauge.",
    "lines": [
      {
        "a": [
          30,
          -12,
          130
        ],
        "b": [
          290,
          -12,
          130
        ],
        "text": "260 mm W",
        "status": "proposed"
      },
      {
        "a": [
          310,
          -12,
          130
        ],
        "b": [
          310,
          -12,
          765
        ],
        "text": "635 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      160,
      10,
      447.5
    ],
    "group": 18,
    "category": "body",
    "status": "proposed",
    "measure": "260 × 635"
  },
  {
    "id": 19,
    "tab": "Right door",
    "name": "Right storage door",
    "bounds": [
      [
        300,
        0,
        130
      ],
      [
        565,
        20,
        765
      ]
    ],
    "home": "front",
    "explode": [
      0,
      -650,
      -20
    ],
    "measurements": [
      {
        "label": "Face · W × H",
        "value": "265 × 635 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet / hinges / gaps",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Second door of the left storage cabinet. Confirm fabrication gaps and hardware with the manufacturer.",
    "lines": [
      {
        "a": [
          300,
          -12,
          130
        ],
        "b": [
          565,
          -12,
          130
        ],
        "text": "265 mm W",
        "status": "proposed"
      },
      {
        "a": [
          585,
          -12,
          130
        ],
        "b": [
          585,
          -12,
          765
        ],
        "text": "635 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      432.5,
      10,
      447.5
    ],
    "group": 19,
    "category": "body",
    "status": "proposed",
    "measure": "265 × 635"
  },
  {
    "id": 20,
    "tab": "Cup column",
    "name": "Cup-column face & lower hatch",
    "bounds": [
      [
        590,
        -2,
        130
      ],
      [
        785,
        20,
        765
      ]
    ],
    "home": "front",
    "explode": [
      0,
      -950,
      -40
    ],
    "measurements": [
      {
        "label": "Main face · W × H",
        "value": "195 × 635 mm",
        "status": "proposed"
      },
      {
        "label": "Lower hatch · W × H",
        "value": "165 × 225 mm",
        "status": "proposed"
      },
      {
        "label": "Actual hardware / access",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Face and lower service hatch are shown as a subassembly. Cup dispenser units are component 24.",
    "lines": [
      {
        "a": [
          590,
          -15,
          130
        ],
        "b": [
          785,
          -15,
          130
        ],
        "text": "195 mm W",
        "status": "proposed"
      },
      {
        "a": [
          810,
          -15,
          130
        ],
        "b": [
          810,
          -15,
          765
        ],
        "text": "635 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      687.5,
      9,
      447.5
    ],
    "group": 20,
    "category": "body",
    "status": "proposed",
    "measure": "195 × 635"
  },
  {
    "id": 21,
    "tab": "Sink fascia",
    "name": "Sink-base upper service fascia",
    "bounds": [
      [
        1340,
        0,
        545
      ],
      [
        1798.8,
        20,
        955
      ]
    ],
    "home": "front",
    "explode": [
      350,
      -500,
      250
    ],
    "measurements": [
      {
        "label": "Face · W × H",
        "value": "458.8 × 410 mm",
        "status": "proposed"
      },
      {
        "label": "Fixings / service access",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Upper fixed/service fascia of the proposed right sink base. No basin is included.",
    "lines": [
      {
        "a": [
          1340,
          -12,
          545
        ],
        "b": [
          1798.8,
          -12,
          545
        ],
        "text": "458.8 mm W",
        "status": "proposed"
      },
      {
        "a": [
          1820,
          -12,
          545
        ],
        "b": [
          1820,
          -12,
          955
        ],
        "text": "410 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      1569.4,
      10,
      750
    ],
    "group": 21,
    "category": "body",
    "status": "proposed",
    "measure": "458.8 × 410"
  },
  {
    "id": 22,
    "tab": "Sink door",
    "name": "Sink-base lower door & pull",
    "bounds": [
      [
        1340,
        -7,
        130
      ],
      [
        1798.8,
        20,
        535
      ]
    ],
    "home": "front",
    "explode": [
      350,
      -650,
      -100
    ],
    "measurements": [
      {
        "label": "Door face · W × H",
        "value": "458.8 × 405 mm",
        "status": "proposed"
      },
      {
        "label": "Pull / hinges / sheet",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Lower sink-base door with its illustrated pull. Confirm clearances against the owner-supplied sink and plumbing.",
    "lines": [
      {
        "a": [
          1340,
          -15,
          130
        ],
        "b": [
          1798.8,
          -15,
          130
        ],
        "text": "458.8 mm W",
        "status": "proposed"
      },
      {
        "a": [
          1820,
          -15,
          130
        ],
        "b": [
          1820,
          -15,
          535
        ],
        "text": "405 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      1569.4,
      6.5,
      332.5
    ],
    "group": 22,
    "category": "body",
    "status": "proposed",
    "measure": "458.8 × 405"
  },
  {
    "id": 23,
    "tab": "Walnut fascia",
    "name": "Operator-facing walnut fascia",
    "bounds": [
      [
        30,
        -3,
        780
      ],
      [
        780,
        22,
        955
      ]
    ],
    "home": "front",
    "explode": [
      -130,
      -580,
      170
    ],
    "measurements": [
      {
        "label": "Panel face · W × H",
        "value": "750 × 175 mm",
        "status": "proposed"
      },
      {
        "label": "Visual panel build-up",
        "value": "25 mm · confirm",
        "status": "proposed"
      },
      {
        "label": "Wood / finish / fixing",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Existing walnut panel is retained. Engraving 15 stays attached to this wood during explosion; it is not a separate applied badge.",
    "lines": [
      {
        "a": [
          30,
          -15,
          780
        ],
        "b": [
          780,
          -15,
          780
        ],
        "text": "750 mm W",
        "status": "proposed"
      },
      {
        "a": [
          805,
          -15,
          780
        ],
        "b": [
          805,
          -15,
          955
        ],
        "text": "175 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      405,
      9.5,
      867.5
    ],
    "group": 23,
    "category": "wood",
    "status": "proposed",
    "measure": "750 × 175"
  },
  {
    "id": 24,
    "tab": "Cup dispensers",
    "name": "Cup dispensers · pair",
    "bounds": [
      [
        625,
        -15,
        405
      ],
      [
        755,
        5,
        700
      ]
    ],
    "home": "front",
    "explode": [
      -60,
      -1000,
      200
    ],
    "measurements": [
      {
        "label": "Quantity",
        "value": "2 units",
        "status": "reference"
      },
      {
        "label": "Visual outer / inner opening",
        "value": "Ø118 / Ø90 mm",
        "status": "proposed"
      },
      {
        "label": "Vertical centre spacing",
        "value": "165 mm",
        "status": "proposed"
      },
      {
        "label": "Depth / selected fitting",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Illustrated sizes only; select actual dispenser units and confirm the mounting cutouts and depth.",
    "lines": [
      {
        "a": [
          631,
          -15,
          635
        ],
        "b": [
          749,
          -15,
          635
        ],
        "text": "Ø118 mm outer",
        "status": "proposed"
      },
      {
        "a": [
          770,
          -15,
          470
        ],
        "b": [
          770,
          -15,
          635
        ],
        "text": "165 mm centres",
        "status": "proposed"
      }
    ],
    "point": [
      690,
      -5,
      552.5
    ],
    "group": 24,
    "category": "body",
    "status": "proposed",
    "measure": "2 units"
  },
  {
    "id": 25,
    "tab": "Casters",
    "name": "Swivel casters · four",
    "bounds": [
      [
        15,
        15,
        0
      ],
      [
        100,
        100,
        101
      ]
    ],
    "home": "iso",
    "explode": [
      0,
      0,
      -250
    ],
    "measurements": [
      {
        "label": "Quantity",
        "value": "4 units",
        "status": "reference"
      },
      {
        "label": "Visual wheel diameter",
        "value": "Ø70 mm",
        "status": "proposed"
      },
      {
        "label": "Visual mounting height",
        "value": "100 mm",
        "status": "proposed"
      },
      {
        "label": "Brakes / rating / fixings",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "One representative caster is used for close inspection; all four remain in the exploded assembly. Wheel and mounting sizes are visual proposals, not selected hardware.",
    "lines": [
      {
        "a": [
          20,
          55,
          35
        ],
        "b": [
          90,
          55,
          35
        ],
        "text": "Ø70 mm wheel",
        "status": "proposed"
      },
      {
        "a": [
          110,
          55,
          0
        ],
        "b": [
          110,
          55,
          100
        ],
        "text": "100 mm visual H",
        "status": "proposed"
      }
    ],
    "point": [
      57.5,
      57.5,
      50.5
    ],
    "group": 25,
    "category": "body",
    "status": "proposed",
    "measure": "4 units"
  },
  {
    "id": 26,
    "tab": "Rear panel",
    "name": "Customer-rear stainless panel",
    "bounds": [
      [
        0,
        1048.8,
        130
      ],
      [
        1828.8,
        1066.8,
        975
      ]
    ],
    "home": "rear",
    "explode": [
      0,
      650,
      100
    ],
    "measurements": [
      {
        "label": "Face · W × H",
        "value": "1828.8 × 845 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet gauge / returns",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Solid rear skin. LED sign 14 is independently separated in exploded mode; actual mount penetrations and driver access remain to be designed.",
    "lines": [
      {
        "a": [
          0,
          1080,
          130
        ],
        "b": [
          1828.8,
          1080,
          130
        ],
        "text": "1828.8 mm W",
        "status": "proposed"
      },
      {
        "a": [
          1850,
          1080,
          130
        ],
        "b": [
          1850,
          1080,
          975
        ],
        "text": "845 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      914.4,
      1057.8,
      552.5
    ],
    "group": 26,
    "category": "body",
    "status": "proposed",
    "measure": "1828.8 × 845"
  },
  {
    "id": 27,
    "tab": "Left skin",
    "name": "Left-end stainless panel",
    "bounds": [
      [
        0,
        20,
        130
      ],
      [
        18,
        1048.8,
        975
      ]
    ],
    "home": "left",
    "explode": [
      -600,
      0,
      100
    ],
    "measurements": [
      {
        "label": "Face · D × H",
        "value": "1028.8 × 845 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet gauge / returns",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Visible left-end skin. The left folding wing and its hardware are components 13 and 31.",
    "lines": [
      {
        "a": [
          -12,
          20,
          130
        ],
        "b": [
          -12,
          1048.8,
          130
        ],
        "text": "1028.8 mm D",
        "status": "proposed"
      },
      {
        "a": [
          -12,
          1070,
          130
        ],
        "b": [
          -12,
          1070,
          975
        ],
        "text": "845 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      9,
      534.4,
      552.5
    ],
    "group": 27,
    "category": "body",
    "status": "proposed",
    "measure": "1028.8 × 845"
  },
  {
    "id": 28,
    "tab": "Right skin",
    "name": "Right-end stainless panel",
    "bounds": [
      [
        1810.8,
        20,
        130
      ],
      [
        1828.8,
        1048.8,
        975
      ]
    ],
    "home": "right",
    "explode": [
      600,
      0,
      100
    ],
    "measurements": [
      {
        "label": "Face · D × H",
        "value": "1028.8 × 845 mm",
        "status": "proposed"
      },
      {
        "label": "Sheet gauge / returns",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Visible right-end skin. Dimensions describe the model face, not final fabrication blanks.",
    "lines": [
      {
        "a": [
          1840,
          20,
          130
        ],
        "b": [
          1840,
          1048.8,
          130
        ],
        "text": "1028.8 mm D",
        "status": "proposed"
      },
      {
        "a": [
          1840,
          1070,
          130
        ],
        "b": [
          1840,
          1070,
          975
        ],
        "text": "845 mm H",
        "status": "proposed"
      }
    ],
    "point": [
      1819.8,
      534.4,
      552.5
    ],
    "group": 28,
    "category": "body",
    "status": "proposed",
    "measure": "1028.8 × 845"
  },
  {
    "id": 29,
    "tab": "Ledge supports",
    "name": "Serving-ledge supports · seven",
    "bounds": [
      [
        130,
        1060,
        1010
      ],
      [
        170,
        1355,
        1135
      ]
    ],
    "home": "rear",
    "explode": [
      0,
      0,
      800
    ],
    "measurements": [
      {
        "label": "Quantity",
        "value": "7 illustrated supports",
        "status": "proposed"
      },
      {
        "label": "Visual horizontal / vertical run",
        "value": "279.8 / 105 mm",
        "status": "proposed"
      },
      {
        "label": "Bracket design / load / section",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Illustrative brace layout only. Inspect one representative rear brace here. Actual brackets, sections, welds, clearances and load capacity require factory design.",
    "lines": [
      {
        "a": [
          150,
          1066.8,
          1020
        ],
        "b": [
          150,
          1346.6,
          1020
        ],
        "text": "279.8 mm visual run",
        "status": "proposed"
      },
      {
        "a": [
          150,
          1346.6,
          1020
        ],
        "b": [
          150,
          1346.6,
          1125
        ],
        "text": "105 mm visual rise",
        "status": "proposed"
      }
    ],
    "point": [
      150,
      1207.5,
      1072.5
    ],
    "group": 29,
    "category": "upper",
    "status": "proposed",
    "measure": "7 illustrated supports"
  },
  {
    "id": 30,
    "tab": "Rail supports",
    "name": "Walnut-rail supports · three",
    "bounds": [
      [
        130,
        1066.8,
        865
      ],
      [
        170,
        1128,
        975
      ]
    ],
    "home": "rear",
    "explode": [
      0,
      460,
      200
    ],
    "measurements": [
      {
        "label": "Quantity",
        "value": "3 illustrated supports",
        "status": "proposed"
      },
      {
        "label": "Visual mounting-strip height",
        "value": "105 mm",
        "status": "proposed"
      },
      {
        "label": "Fastenings / support design",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Representative rail support. Hardware dimensions are not finalized.",
    "lines": [
      {
        "a": [
          140,
          1080,
          865
        ],
        "b": [
          140,
          1080,
          970
        ],
        "text": "105 mm visual mount",
        "status": "proposed"
      }
    ],
    "point": [
      150,
      1097.4,
      920
    ],
    "group": 30,
    "category": "wood",
    "status": "proposed",
    "measure": "3 illustrated supports"
  },
  {
    "id": 31,
    "tab": "Wing hardware",
    "name": "Folding-wing hinge & supports",
    "bounds": [
      [
        -40,
        0,
        700
      ],
      [
        -20,
        420,
        980
      ]
    ],
    "home": "left",
    "explode": [
      -550,
      -200,
      100
    ],
    "measurements": [
      {
        "label": "Visual hinge span",
        "value": "420 mm",
        "status": "proposed"
      },
      {
        "label": "Visual support span",
        "value": "250 mm",
        "status": "proposed"
      },
      {
        "label": "Hinge / locks / fixing sizes",
        "value": "To confirm",
        "status": "proposed"
      }
    ],
    "note": "Illustrated hinge and two support members only. Confirm actual folding action, lock, mounting and clearance under the serving ledge.",
    "lines": [
      {
        "a": [
          -35,
          0,
          975
        ],
        "b": [
          -35,
          420,
          975
        ],
        "text": "420 mm visual hinge",
        "status": "proposed"
      }
    ],
    "point": [
      -30,
      210,
      840
    ],
    "group": 31,
    "category": "wood",
    "status": "proposed",
    "measure": "420"
  }
];
