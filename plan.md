# plan.md

## 1. Objectives
- Redesign Rojan Kafle’s portfolio to **not look generic/AI** by adopting his own **vintage-print / zine / editorial** design language (cream paper, brutal black type, single green/teal spot color, halftone + grunge, print artifacts).
- Keep **all existing content** and **add 2 featured poster works** (SUMMIT + THE ROCKS) prominently.
- Build a **functional contact flow**: React form → FastAPI `/api/contact` → MongoDB storage, plus admin read endpoint.
- Deliver a responsive, accessible, fast single-page site with smooth in-page nav and lightbox viewing for posters.

## 2. Implementation Steps

### Phase 1 — Design system + prep (no POC needed)
1. Call `design_agent` to formalize the zine system:
   - Tokens: cream/black/green palette, spacing, borders, shadows.
   - Typography pairing: display (condensed/brutalist), body (clean), optional mono (issue labels/spec blocks).
   - Texture rules: paper grain, halftone overlays, grunge masks (subtle + performant).
   - Layout patterns: editorial grid, asymmetric hero, vertical side text, stamps/tickets/crop marks.
   - Motion: small scroll reveals + ink/print hover states; keep it lightweight.
2. Download poster PNG assets into `frontend/public/assets/work/` for reliability.
3. Frontend scaffolding decisions:
   - Use CSS variables for tokens; avoid default shadcn “card grid” look.
   - Optional: add `framer-motion` for minimal reveal animations.

**User stories (Phase 1)**
- As a visitor, I immediately see a bold editorial hero that feels like a printed zine.
- As a visitor, I can navigate sections via a clear in-page index/TOC.
- As a visitor, I can read text comfortably with strong contrast on cream background.
- As a mobile user, the layout retains hierarchy and doesn’t collapse into generic cards.
- As a recruiter, I can scan “availability” quickly via a standout stamp/callout.

### Phase 2 — V1 app development (frontend + backend) + 1st end-to-end test

#### Backend (FastAPI + Mongo)
1. Add Mongo collection `contact_messages` with fields:
   - `name`, `email`, `message`, optional `subject`, `created_at`, `source`.
2. Implement routes:
   - `POST /api/contact` (validate, store, return success)
   - `GET /api/contact` (admin list; newest first; basic pagination via query params)
   - `GET /api/health` confirm DB connectivity
3. Add simple server-side validation + rate-limit-lite behavior (basic IP/time guard if easy).

#### Frontend (React)
1. Replace existing UI with a **single-page editorial layout**:
   - Hero: oversized “ROJAN KAFLE”, role/tagline, issue/date-style metadata.
   - About: original about text + availability callout (stamp-style).
   - Work/Portfolio gallery: 4 pieces total:
     - SUMMIT poster (new)
     - THE ROCKS poster (new)
     - Aprilia RSV4 spec poster (existing)
     - Porsche 911 GT3 RS spec poster (existing)
   - GitHub projects section: keep all 4 repos with clear external links.
   - Skills: styled like a “spec sheet / index” (Design Tools, Specialties, Technical, Soft Skills).
   - Education: A Levels block.
   - Contact: functional form + existing email/phone/github.
2. Implement gallery interactions:
   - Hover states with print/ink feel.
   - Lightbox modal (keyboard accessible) for poster viewing.
3. Wire contact form:
   - States: idle, submitting, success, error.
   - Client validation + backend error handling.
4. Add smooth scroll + active section indicator.

**User stories (Phase 2)**
- As a visitor, I can open each poster in a large, readable lightbox.
- As a visitor, I can quickly understand Rojan’s design + tech blend from the hero and about.
- As a recruiter, I can scan skills and projects with clear hierarchy and links.
- As a client, I can submit the contact form and get a clear confirmation.
- As Rojan, I can retrieve submitted messages via an admin endpoint.

#### Testing (end of Phase 2)
- Run `testing_agent_v3` for E2E checks:
  - Page renders + navigation works (desktop/mobile).
  - Lightbox opens/closes + keyboard escape.
  - Contact POST stores message; GET lists it.
  - Visual regressions (no overflow, readable typography).

### Phase 3 — Polish + UX/accessibility/performance + 2nd end-to-end test
1. Refine textures & print artifacts:
   - Ensure grain/halftone are subtle, non-distracting, and performant.
   - Add small details: crop marks, issue number, vertical side labels (not cluttered).
2. Improve responsiveness:
   - Mobile typographic scaling, stacked editorial blocks, safe tap targets.
3. Accessibility pass:
   - Contrast checks, focus states, reduced-motion support.
4. Backend hardening (minimal):
   - Better validation messages; optional spam honeypot field.

**User stories (Phase 3)**
- As a motion-sensitive user, I can enable reduced motion without losing usability.
- As a mobile user, posters remain easy to view and text remains readable.
- As a visitor, I get instant feedback for contact form errors (missing email, etc.).
- As a recruiter, I can quickly copy email/phone and open GitHub.
- As Rojan, I can trust messages are stored reliably with timestamps.

#### Testing (end of Phase 3)
- Run `testing_agent_v3` again for regression + UX validation.

## 3. Next Actions
1. Run `design_agent` to lock typography + tokens + layout patterns based on the two posters.
2. Download the two poster PNGs into `frontend/public/assets/work/`.
3. Implement backend contact endpoints + Mongo schema.
4. Implement full frontend redesign (single-page editorial) + lightbox + contact wiring.
5. Execute `testing_agent_v3`, fix issues, then do a final polish/testing pass.

## 4. Success Criteria
- Portfolio visually reads as **hand-crafted editorial/zine** (cream paper, brutal typography, green spot color, halftone/grunge) and avoids generic template aesthetics.
- All existing information is present and readable; **SUMMIT + THE ROCKS** are included as featured works.
- Contact form works end-to-end (POST saves to Mongo, GET retrieves) with clear UI states.
- Responsive and accessible (keyboard nav, focus, contrast, reduced motion).
- Testing agent passes core flows with no broken interactions.