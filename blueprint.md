# Project Blueprint - Damien Miri CV (Monochrome Minimalist)

## Overview
A high-end, monochrome, and minimalist portfolio. The design is strictly black and white with shades of gray, conveying a sense of timeless elegance, creative authority, and technical precision.

## Design Philosophy (Strict Monochrome)
- **Website Mode:**
    - **Aesthetics:** Pure black background (#000000), white and gray typography, no colors.
    - **Color Palette:** 
        - Primary Background: #000000 (Pure Black).
        - Text Primary: #FFFFFF (White).
        - Text Secondary: #94a3b8 (Slate-400) / #64748b (Slate-500).
        - Accents: White or Light Gray. No Blue.
    - **Typography:** 
        - Primary: 'Inter' (Sans-serif) using thin and light weights.
        - Style: Modern, clean, and spacious.
    - **Components:** 
        - Profile photo: Grayscale, straight (no rotation).
        - Navigation: Minimalist right-aligned navigation.
        - Borders/Dividers: Very subtle (white/10 or slate-900).
- **Print Mode (@media print):**
    - **Transformation:** Standard black on white layout.
    - **Legibility:** High-contrast sans-serif.

## SEO & GEO Strategy
- **Keywords:** Damien Miri, Creative Director, AI Solutions Architect, Paris, France, IA Générative, Motion Design, UX/UI, 3D, Unreal Engine.
- **Open Graph:** Enhanced metadata for LinkedIn sharing (image, title, description).
- **Structured Data:** JSON-LD schema for "Person" to improve Google indexing.
- **GEO Tags:** Explicit location data for local relevance in Paris, France.
- **Language:** HTML lang="fr" for better targeting in French-speaking markets.

## Action Plan
1.  **Dependency Fix:** Add `typescript` to `devDependencies` to resolve Cloudflare deployment errors related to missing lock file entries.
2.  **Global CSS Update:** Remove all blue variables and gradients. Use pure black and shades of gray.
3.  **Page Refactoring:** 
    - Replace all `blue` Tailwind classes with `white`, `slate`, or `gray`.
    - Update hover states to transition between grays and white.
    - Ensure the profile image container and dividers follow the monochrome theme.
4.  **SEO & GEO implementation:** 
    - Update `Layout.astro` with advanced meta tags.
    - Add JSON-LD script for structured data.
5.  **Final Polish:** Verify that the "A4 CV" button and all interactive elements are strictly monochrome.
