{
  "meta": {
    "app_type": "single-page graphic designer portfolio",
    "design_personality": [
      "vintage-print / zine / editorial",
      "brutalist condensed headlines",
      "tactile paper + ink artifacts",
      "one-spot-color discipline (green/teal)",
      "asymmetric grid with intentional rule-breaking"
    ],
    "north_star": "Make the site feel like a printed magazine cover / gig poster brought to the web: cream paper, near-black ink, one green spot color, crop marks, stamps, halftone, ticket stubs—no SaaS template vibes."
  },

  "design_tokens": {
    "colors": {
      "ink": {
        "ink-900": "#11110F",
        "ink-800": "#1A1A17",
        "ink-700": "#2A2A25",
        "ink-500": "#4A4A43"
      },
      "paper": {
        "paper-50": "#FBF6EA",
        "paper-100": "#F6EEDC",
        "paper-200": "#EDE1C7",
        "paper-300": "#E2D3B3"
      },
      "spot_green": {
        "spot-600": "#0E8A5A",
        "spot-500": "#12A66B",
        "spot-400": "#2BCB86"
      },
      "utility": {
        "danger": "#B42318",
        "warning": "#B54708",
        "success": "#067647",
        "focus_ring": "#12A66B"
      },
      "rules_and_borders": {
        "rule": "rgba(17, 17, 15, 0.22)",
        "rule-strong": "rgba(17, 17, 15, 0.55)",
        "shadow_ink": "rgba(17, 17, 15, 0.18)"
      },
      "notes": {
        "spot_color_rule": "Use ONLY spot_green for accents (links, stamps, active nav, small highlights). Do not introduce secondary accent colors.",
        "contrast_rule": "All body text must be ink-900 on paper-50/100. Avoid gray-on-cream for paragraphs."
      }
    },

    "radius": {
      "r0": "0px",
      "r1": "6px",
      "r2": "10px",
      "r3": "14px",
      "stamp": "999px"
    },

    "shadows": {
      "print_lift": "0 1px 0 rgba(17,17,15,0.10), 0 10px 24px rgba(17,17,15,0.08)",
      "stamp_press": "inset 0 0 0 2px rgba(17,17,15,0.85), 0 1px 0 rgba(17,17,15,0.12)",
      "ticket_edge": "0 0 0 1px rgba(17,17,15,0.35)"
    },

    "spacing": {
      "container": {
        "max": "72rem",
        "pad_x": "px-4 sm:px-6 lg:px-10",
        "pad_y_section": "py-14 sm:py-18 lg:py-24"
      },
      "rhythm": {
        "tight": "gap-3",
        "normal": "gap-6",
        "loose": "gap-10"
      }
    }
  },

  "css_custom_properties": {
    "where": "/app/frontend/src/index.css (replace :root tokens)",
    "instructions": [
      "Replace the default shadcn :root HSL tokens with the cream/ink/green system below.",
      "Keep dark mode optional; this portfolio should default to paper (light) mode.",
      "Do NOT add .App { text-align:center } anywhere."
    ],
    "token_block": "@layer base {\n  :root {\n    --background: 43 56% 95%; /* paper-50 */\n    --foreground: 60 6% 7%; /* ink-900 */\n\n    --card: 43 56% 95%;\n    --card-foreground: 60 6% 7%;\n\n    --popover: 43 56% 95%;\n    --popover-foreground: 60 6% 7%;\n\n    --primary: 60 6% 7%;\n    --primary-foreground: 43 56% 95%;\n\n    --secondary: 41 44% 91%; /* paper-100 */\n    --secondary-foreground: 60 6% 7%;\n\n    --muted: 41 44% 91%;\n    --muted-foreground: 60 4% 28%; /* ink-500 */\n\n    --accent: 155 80% 36%; /* spot-600 */\n    --accent-foreground: 43 56% 95%;\n\n    --destructive: 4 74% 40%;\n    --destructive-foreground: 43 56% 95%;\n\n    --border: 60 6% 7% / 0.22;\n    --input: 60 6% 7% / 0.22;\n    --ring: 155 80% 36%;\n\n    --radius: 0.625rem;\n  }\n}\n"
  },

  "typography": {
    "google_fonts": {
      "display": {
        "family": "Bebas Neue",
        "weights": ["400"],
        "usage": "Oversized masthead name, section headlines, poster-like labels"
      },
      "body": {
        "family": "IBM Plex Sans",
        "weights": ["400", "500", "600"],
        "usage": "Paragraphs, form labels, UI copy"
      },
      "mono": {
        "family": "IBM Plex Mono",
        "weights": ["400", "500", "600"],
        "usage": "Metadata, TOC/index, repo stats, timestamps, side text"
      }
    },
    "font_application": {
      "global": {
        "body": "font-[\"IBM Plex Sans\"]",
        "mono": "font-[\"IBM Plex Mono\"]",
        "display": "font-[\"Bebas Neue\"]"
      },
      "scale": {
        "h1": {
          "tailwind": "text-5xl sm:text-6xl lg:text-7xl",
          "tracking": "tracking-tight",
          "leading": "leading-[0.9]",
          "notes": "Allow overlap with rules/crop marks; clamp on mobile to avoid overflow."
        },
        "h2": {
          "tailwind": "text-base md:text-lg",
          "tracking": "tracking-wide",
          "leading": "leading-snug",
          "notes": "Per constraint: do not scale beyond text-lg. Use weight + uppercase for hierarchy."
        },
        "section_title": {
          "tailwind": "text-3xl sm:text-4xl",
          "font": "display",
          "tracking": "tracking-[0.02em]",
          "notes": "Use as poster headline; can break grid slightly."
        },
        "body": {
          "tailwind": "text-sm sm:text-base",
          "leading": "leading-relaxed",
          "max_width": "max-w-prose"
        },
        "meta": {
          "tailwind": "text-xs uppercase",
          "font": "mono",
          "tracking": "tracking-[0.18em]",
          "color": "text-[color:rgba(17,17,15,0.72)]"
        }
      }
    },
    "selection_and_cursor": {
      "selection_css": "::selection { background: rgba(18,166,107,0.22); color: #11110F; }",
      "cursor": "Use default cursor; for links/buttons use cursor-pointer. Avoid novelty cursors."
    }
  },

  "texture_and_print_artifacts": {
    "performance_rule": "Textures must be CSS/SVG overlays (no heavy full-screen PNG). Keep overlays subtle (opacity 0.06–0.14).",
    "recipes": {
      "paper_grain_overlay": {
        "how": "Add a fixed pseudo-element on body or main wrapper.",
        "css": "body::before { content: \"\"; position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: 0.10; mix-blend-mode: multiply; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"180\" height=\"180\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"180\" height=\"180\" filter=\"url(%23n)\" opacity=\"0.55\"/></svg>'); }",
        "notes": "SVG turbulence is lightweight and avoids shipping images. Ensure content wrapper has position:relative and z-index:1."
      },
      "halftone_dots": {
        "how": "Use a repeating-radial-gradient overlay on hero + work section only (<=20% viewport each).",
        "tailwind_example": "bg-[radial-gradient(circle_at_1px_1px,rgba(17,17,15,0.18)_1px,transparent_1.6px)] bg-[length:10px_10px]",
        "notes": "Keep dot opacity low; never behind long paragraphs."
      },
      "photocopy_edge_distress": {
        "how": "Apply subtle mask/clip + noise to cards like ticket stubs and stamps.",
        "css": ".distress { filter: contrast(1.02) saturate(0.98); box-shadow: var(--print-lift); }"
      },
      "crop_marks": {
        "how": "Create a reusable <CropMarks /> component using absolutely positioned divs (no canvas).",
        "tailwind": "absolute inset-0 pointer-events-none opacity-60",
        "marks": "Use 8 small rules at corners: w-6 h-px and w-px h-6 with ink alpha."
      },
      "registration_marks": {
        "how": "Small plus marks near corners; use spot green for ONE of them only.",
        "notes": "Keep tiny; decorative only; aria-hidden."
      },
      "rubber_stamp": {
        "how": "Use Badge component styled as stamp: uppercase, tracking, rotated -6deg to -10deg, rough border via dashed + shadow.",
        "tailwind": "inline-flex items-center rounded-full border-2 border-[color:rgba(17,17,15,0.85)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] shadow-[inset_0_0_0_1px_rgba(17,17,15,0.35)] rotate-[-8deg]",
        "accent": "For 'AVAILABLE' stamp, set text + border to spot green and add bg spot green at 8% opacity."
      },
      "ticket_stub": {
        "how": "Ticket callout block with perforation using repeating-linear-gradient on one edge.",
        "css": ".ticket { position: relative; } .ticket::after { content: \"\"; position:absolute; top:0; bottom:0; left:-1px; width:10px; background: repeating-linear-gradient(to bottom, transparent 0 6px, rgba(17,17,15,0.35) 6px 7px); opacity:0.7; }"
      },
      "barcode": {
        "how": "Generate a faux barcode with CSS linear-gradients; use as footer colophon decoration.",
        "css": ".barcode { background: repeating-linear-gradient(90deg, rgba(17,17,15,0.85) 0 2px, transparent 2px 4px, rgba(17,17,15,0.55) 4px 5px, transparent 5px 7px); height: 28px; }"
      }
    }
  },

  "layout_and_composition": {
    "grid": {
      "mobile": "Single column; use stacked blocks with strong rules and metadata labels.",
      "desktop": "12-col grid with intentional overlaps: hero masthead spans 8–10 cols; side index spans 2–3 cols; work gallery uses 6/6 split then 4-up.",
      "container": "max-w-6xl mx-auto",
      "rules": [
        "Use horizontal rules (Separator) as primary structure instead of cards.",
        "Allow 1–2 elements per section to break the grid (rotated stamp, vertical side text, overlapping headline).",
        "Keep reading flow left-aligned; avoid centered hero blocks.",
        "Use generous whitespace: section padding >= 56px on mobile."
      ]
    },
    "section_skeleton": {
      "masthead_hero": [
        "Top strip: issue/date/location + nav index (mono).",
        "Main: oversized name (display) + role line (body) + availability stamp.",
        "Right rail (desktop): vertical rotated text 'KATHMANDU → REMOTE' + crop marks."
      ],
      "about": [
        "Two-column on desktop: about copy + ticket-stub availability block.",
        "Add small 'ADMIT ONE' ticket label for availability."
      ],
      "selected_work": [
        "Image-forward gallery with poster aspect ratios.",
        "Hover reveals metadata strip (mono) + 'VIEW' stamp.",
        "Click opens Dialog lightbox."
      ],
      "github_lab": [
        "List like a spec sheet: repo name (mono), description (body), tags (Badge), external link icon.",
        "Use Separator between rows."
      ],
      "skills_index": [
        "Table-like index: category label (mono uppercase) + chips/bullets.",
        "Use subtle dotted leader lines between label and content on desktop."
      ],
      "education": [
        "Single block with strong headline + timeline row.",
        "Add small registration mark + issue number style."
      ],
      "contact": [
        "Form left; contact links right (mono).",
        "Form states: idle/submitting/success/error using Alert + Sonner toast."
      ],
      "footer_colophon": [
        "Colophon: fonts used, build stack, last updated date, barcode strip.",
        "Tiny print vibe; keep accessible contrast."
      ]
    }
  },

  "components": {
    "component_path": {
      "shadcn_ui": [
        "/app/frontend/src/components/ui/button.jsx",
        "/app/frontend/src/components/ui/badge.jsx",
        "/app/frontend/src/components/ui/separator.jsx",
        "/app/frontend/src/components/ui/dialog.jsx",
        "/app/frontend/src/components/ui/sheet.jsx",
        "/app/frontend/src/components/ui/scroll-area.jsx",
        "/app/frontend/src/components/ui/tooltip.jsx",
        "/app/frontend/src/components/ui/input.jsx",
        "/app/frontend/src/components/ui/textarea.jsx",
        "/app/frontend/src/components/ui/label.jsx",
        "/app/frontend/src/components/ui/alert.jsx",
        "/app/frontend/src/components/ui/sonner.jsx"
      ],
      "new_components_to_create": [
        "/app/frontend/src/components/CropMarks.js",
        "/app/frontend/src/components/Stamp.js",
        "/app/frontend/src/components/TicketCallout.js",
        "/app/frontend/src/components/SectionIndexNav.js",
        "/app/frontend/src/components/WorkLightbox.js",
        "/app/frontend/src/components/WorkCard.js",
        "/app/frontend/src/components/SkillsIndex.js",
        "/app/frontend/src/components/ColophonFooter.js"
      ]
    },

    "patterns": {
      "sticky_editorial_nav": {
        "use": "Sheet + custom TOC list",
        "behavior": [
          "Sticky top strip with issue/date + a 'INDEX' button that opens Sheet from left.",
          "Active section indicator: small spot-green square + underline rule.",
          "On scroll, update active section via IntersectionObserver."
        ],
        "tailwind": {
          "strip": "sticky top-0 z-40 bg-[color:var(--paper)]/90 backdrop-blur-[2px] border-b border-[color:rgba(17,17,15,0.22)]",
          "index_button": "font-mono uppercase tracking-[0.18em] text-xs"
        },
        "data_testids": {
          "index_open": "nav-index-open-button",
          "index_sheet": "nav-index-sheet",
          "toc_link": "nav-toc-link"
        }
      },

      "buttons": {
        "style": "Print-era functional (not glossy). Medium radius, strong borders, slight press.",
        "variants": {
          "primary": {
            "look": "Ink fill with paper text",
            "tailwind": "bg-[color:#11110F] text-[color:#FBF6EA] border border-[color:rgba(17,17,15,0.85)] hover:bg-[color:#1A1A17] focus-visible:ring-2 focus-visible:ring-[color:#12A66B]",
            "motion": "hover: translateY(-1px) shadow; active: translateY(0)"
          },
          "secondary": {
            "look": "Paper fill with ink border",
            "tailwind": "bg-[color:#FBF6EA] text-[color:#11110F] border border-[color:rgba(17,17,15,0.55)] hover:border-[color:rgba(17,17,15,0.85)]",
            "accent": "Use spot green only for small underline or icon."
          },
          "ghost": {
            "look": "Text-only with underline rule",
            "tailwind": "bg-transparent text-[color:#11110F] hover:bg-[color:rgba(18,166,107,0.08)]"
          }
        },
        "no_transition_all": "Only transition colors/shadow/opacity. Example: transition-colors duration-150"
      },

      "work_card": {
        "layout": "Poster image + bottom metadata strip (mono) + stamp overlay.",
        "hover": [
          "Image gets subtle contrast bump + halftone overlay fades in.",
          "Metadata strip slides up 6–10px.",
          "Cursor remains pointer; focus ring visible."
        ],
        "lightbox": "Use Dialog. Inside: large image, title, tags, prev/next buttons.",
        "assets": [
          "/assets/work/summit.png",
          "/assets/work/the-rocks.png"
        ],
        "data_testids": {
          "card": "work-card",
          "open": "work-lightbox-open-button",
          "dialog": "work-lightbox-dialog",
          "next": "work-lightbox-next-button",
          "prev": "work-lightbox-prev-button"
        }
      },

      "github_repo_row": {
        "layout": "Row with name + description + tags + external link.",
        "components": ["Separator", "Badge", "Button (ghost)"],
        "data_testids": {
          "repo_row": "github-repo-row",
          "repo_link": "github-repo-external-link"
        }
      },

      "skills_index": {
        "layout": "Index/spec sheet: left label column (mono uppercase) + right content.",
        "chips": "Use Badge with ink border; only one chip per row may be spot-green (highlight).",
        "data_testids": {
          "skills-section": "skills-index-section"
        }
      },

      "contact_form": {
        "components": ["Label", "Input", "Textarea", "Button", "Alert", "Sonner"],
        "states": {
          "idle": "Primary button enabled",
          "submitting": "Button disabled + inline 'Sending…' meta text",
          "success": "Sonner toast + Alert success",
          "error": "Alert destructive + keep user input"
        },
        "data_testids": {
          "name": "contact-form-name-input",
          "email": "contact-form-email-input",
          "message": "contact-form-message-textarea",
          "submit": "contact-form-submit-button",
          "status": "contact-form-status-message"
        }
      }
    }
  },

  "motion_and_microinteractions": {
    "library": {
      "recommended": "framer-motion",
      "install": "npm i framer-motion",
      "usage": "Use for subtle entrance reveals and stamp pop-in; respect prefers-reduced-motion."
    },
    "principles": [
      "Motion should feel like paper handling: slight lifts, tiny rotations, quick ink fades.",
      "No bouncy spring defaults; use short durations (120–220ms) and low distances (6–14px).",
      "Prefer opacity + translateY; avoid scaling large text blocks."
    ],
    "recipes": {
      "section_reveal": {
        "default": "initial: {opacity:0, y:10} whileInView: {opacity:1, y:0} viewport: {once:true, margin:'-10%'} transition: {duration:0.35, ease:[0.22,1,0.36,1]}",
        "reduced_motion": "If prefers-reduced-motion: skip y transforms; only opacity."
      },
      "stamp_hover": {
        "behavior": "On hover/focus: rotate to 0deg and increase opacity; on active: slight press.",
        "tailwind": "transition-[opacity,transform,box-shadow] duration-150"
      },
      "nav_active_indicator": {
        "behavior": "Active section dot slides 6px; underline draws in (scaleX).",
        "notes": "Keep subtle; do not animate layout-affecting properties."
      }
    }
  },

  "accessibility": {
    "rules": [
      "Maintain WCAG AA contrast: ink-900 on paper-50/100 for body text.",
      "All focusable elements must have visible focus ring: ring-2 ring-[color:#12A66B] ring-offset-2 ring-offset-[color:#FBF6EA].",
      "Decorative artifacts (crop marks, registration marks, halftone overlays) must be aria-hidden and pointer-events-none.",
      "Ensure oversized headlines wrap and never overflow viewport: use max-w and break-words where needed.",
      "Support prefers-reduced-motion: disable scroll reveals and hover transforms when enabled."
    ],
    "testing": {
      "data_testid_requirement": "All interactive and key informational elements MUST include data-testid in kebab-case describing role.",
      "examples": [
        "data-testid=\"nav-index-open-button\"",
        "data-testid=\"work-lightbox-open-button\"",
        "data-testid=\"contact-form-submit-button\""
      ]
    }
  },

  "images": {
    "image_urls": [
      {
        "category": "featured_work",
        "description": "Poster: SUMMIT (Valorant-style vintage magazine cover). Use as first featured work tile.",
        "url": "/assets/work/summit.png"
      },
      {
        "category": "featured_work",
        "description": "Poster: THE ROCKS gig poster. Use as second featured work tile.",
        "url": "/assets/work/the-rocks.png"
      }
    ],
    "notes": "Keep gallery image backgrounds transparent/cream-friendly. Avoid adding stock photography; the posters are the hero."
  },

  "instructions_to_main_agent": [
    "Replace default App.css hero styles; remove dark centered CRA header styling entirely.",
    "Update /app/frontend/src/index.css :root tokens to paper/ink/spot-green HSL values provided.",
    "Implement a sticky masthead strip + Sheet-based INDEX nav with active section indicator.",
    "Build sections with Separator rules and metadata labels (mono). Avoid card-heavy layouts.",
    "Implement Work gallery using WorkCard + Dialog lightbox; include keyboard navigation and focus trapping.",
    "Add subtle paper grain overlay (SVG turbulence) and limited halftone overlays only in hero/work headers (<=20% viewport).",
    "Ensure every button/link/input has data-testid attributes as specified.",
    "Use only one accent color (spot green). No gradients except extremely mild decorative overlays; never on text-heavy areas."
  ],

  "general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
