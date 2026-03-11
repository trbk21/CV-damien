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

## Action Plan
1.  **Global CSS Update:** Remove all blue variables and gradients. Use pure black and shades of gray.
2.  **Page Refactoring:** 
    - Replace all `blue` Tailwind classes with `white`, `slate`, or `gray`.
    - Update hover states to transition between grays and white.
    - Ensure the profile image container and dividers follow the monochrome theme.
3.  **Final Polish:** Verify that the "A4 CV" button and all interactive elements are strictly monochrome.
