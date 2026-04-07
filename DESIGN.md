# Design System — Sisir Kafle Portfolio

## Product Context
- **What this is:** A professional advocate portfolio and profile site for Sisir Kafle, presenting legal experience, credentials, achievements, and contact details.
- **Who it's for:** Potential clients, legal collaborators, employers, and institutions seeking a credible legal professional.
- **Space/industry:** Legal services, advocacy, corporate compliance, and professional services.
- **Project type:** Personal professional portfolio and profile site.

## Aesthetic Direction
- **Direction:** Refined editorial legal brand.
- **Decoration level:** Intentional.
- **Mood:** Calm, authoritative, polished, and modern. It should feel credible first, memorable second.
- **Reference logic:** Avoid startup gradients and generic portfolio tropes. Use a legal-magazine sensibility with stronger hierarchy and restrained richness.

## Typography
- **Display/Hero:** Cormorant Garamond, for authority, gravitas, and a formal legal feel.
- **Body:** Manrope, for clarity, modern readability, and cleaner UI rhythm.
- **UI/Labels:** Manrope, with tighter uppercase tracking for structure.
- **Data/Tables:** Manrope with tabular numerals where needed.
- **Code:** Not applicable for this product.
- **Loading:** `next/font/google` with CSS variables.
- **Scale:** Hero 64px desktop / 40px mobile, section title 40px / 30px, card title 24px, body 18px, label 12px uppercase.

## Color
- **Approach:** Restrained with strong accents.
- **Primary:** `#6f1d1b`, oxblood, for authority and distinction.
- **Secondary:** `#b08968`, antique gold, for premium emphasis and controlled warmth.
- **Neutrals:** `#fffaf4` to `#201a18`, warm paper through dark ink.
- **Semantic:** success `#2f855a`, warning `#c7791a`, error `#c53030`, info `#2b6cb0`.
- **Dark mode:** Maintain deep neutral surfaces, reduce warm accent saturation slightly, preserve legibility over atmosphere.

## Spacing
- **Base unit:** 8px.
- **Density:** Comfortable.
- **Scale:** 4, 8, 12, 16, 24, 32, 48, 64.

## Layout
- **Approach:** Hybrid, structured for credibility with selective editorial moments.
- **Grid:** Single-column stacked storytelling with two-column splits for supporting sections on larger screens.
- **Max content width:** 1200px for hero, 960px to 1100px for interior sections.
- **Border radius:** 12px small, 24px medium, 32px large, full for pill actions.

## Motion
- **Approach:** Intentional.
- **Easing:** Smooth ease-out for reveal, ease-in-out for movement.
- **Duration:** 180ms micro, 300ms standard, 600ms ambient.
- **Principles:** Use glow, float, shimmer, and hover lift sparingly. Motion should reinforce status and polish, not feel playful or noisy.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-07 | Adopted editorial serif + modern sans pairing | Better fits a legal professional than generic product-site typography |
| 2026-04-07 | Shifted palette to oxblood, antique gold, and warm paper | Creates a more premium and professional legal identity |
| 2026-04-07 | Kept motion restrained and atmospheric | Adds polish without undermining trust |
