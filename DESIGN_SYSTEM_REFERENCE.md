# Bear Media Design System Reference

Quick lookup guide for visual consistency standards across the site.

---

## Border Radius Scale

Use these border radius values consistently across components:

```
rounded-full    → Buttons, avatars, social icons, circles
rounded-3xl     → Featured project cards, testimonial cards, hero images
rounded-2xl     → Service cards, form inputs, additional project cards
rounded-lg      → Small modals, subtle containers
```

**Never mix radii on the same component family.**

---

## Image Rounding Hierarchy

```
PRIMARY (Featured/Hero)           → rounded-3xl (17px)
SECONDARY (Additional/Service)    → rounded-2xl (12px)  
AVATAR (Profile Pictures)         → rounded-full (circles)
```

---

## Spacing System

**Vertical Spacing Between Sections:**

Mobile (sm):
```
pt-8   → Standard section top padding
pt-24  → Large section with emphasis
pb-10  → Standard section bottom padding
pb-12  → Larger section with breathing room
```

Desktop (md and up):
```
pt-12  → Standard section top padding
pt-28  → Large section with emphasis  
pb-12  → Standard section bottom padding
pb-16  → Larger section with breathing room
```

**Pattern:** Mobile spacing roughly 1/3 of desktop spacing

---

## Card Components

### Featured Project Card
```
Radius:         rounded-3xl
Aspect Ratio:   4/5
Hover Effect:   group-hover:scale-105 (image only)
Background:     bg-muted (placeholder)
Text Position:  Below image
```

### Service Card
```
Radius:         rounded-2xl
Border:         border-foreground/10
Padding:        p-6 md:p-7
Hover Effects:  
  • -translate-y-1 (lift)
  • border-foreground/30 (border darkens)
  • shadow-lg shadow-black/5 (shadow)
  • Icon color to text-accent
  • Arrow expand gap-2.5
```

### Testimonial Card
```
Radius:         rounded-3xl
Background:     bg-secondary (light grey)
Padding:        p-8
Hover Effect:   None (intentional - static content)
Avatar:         rounded-full
```

---

## Typography

### Font Stack
```
Headings:  SF Pro Display, system fonts, fallback to Helvetica
Body:      SF Pro Text, system fonts, fallback to Helvetica
Mono:      SF Mono (development only)
```

### Size Scale

**Headings:**
```
H1: text-7xl (lg)   → Hero title
    text-6xl (md)   → Large page title
    text-5xl (sm)   → Mobile page title

H2: text-5xl (lg)   → Section title
    text-4xl (md)   → Section title mobile
    
H3: text-2xl (md)   → Card/subsection title
    text-xl         → Smaller subsection
```

**Body:**
```
Large:    text-xl    → Large paragraph, subheading
Default:  text-lg    → Standard paragraph
Small:    text-sm    → Secondary text, labels
Tiny:     text-xs    → Badges, metadata
```

### Weight Scale
```
font-medium    → Headings, emphasis
font-light     → Elegant body text, subtlety
font-semibold  → Strong emphasis (rare)
```

### Line Height
```
Headings:  leading-[1.05]     → Tight, elegant
           leading-tight      → Compact heading
Body:      leading-relaxed    → ~1.6, readable
Quote:     leading-relaxed    → Same as body
```

---

## Colors

### Palette
```
Background:    oklch(1 0 0)              → Pure white
Foreground:    oklch(0.15 0 0)           → Charcoal
Accent:        oklch(0.65 0.16 64.25)    → Bear Media Gold
Secondary:     oklch(0.97 0 0)           → Light grey (section bg)
Muted:         oklch(0.96 0 0)           → Very light grey (placeholder)
Border:        oklch(0.95 0 0)           → Nearly white
```

### Usage
```
Primary CTA:           bg-accent text-accent-foreground
Secondary CTA:         border border-white/50 text-white
Section Background:    bg-secondary (for emphasis)
Default Background:    bg-background (white)
Text Hierarchy:        
  • Primary:    text-foreground
  • Secondary:  text-muted-foreground
  • Tertiary:   text-foreground/70
Border:                border-foreground/10 (subtle)
```

---

## Hover Effects

### Images
```
All project/product images: group-hover:scale-105
Duration: duration-700
Effect: Subtle zoom on hover
```

### Text Links
```
Navigation links:  hover:opacity-70
Footer links:      hover:text-foreground (from muted-foreground)
```

### Buttons
```
Primary buttons:   hover:opacity-90 or hover:scale-[1.03]
Secondary buttons: hover:bg-white/10 or hover:border-opacity-100
```

### Cards
```
Service cards:     Multiple (lift + border + shadow + color)
Project cards:     Image scale only (subtle)
Testimonials:      None (static content)
```

---

## Responsive Breakpoints

**Tailwind breakpoints in use:**
```
sm:  640px   (mobile landscape)
md:  768px   (tablet)
lg:  1024px  (desktop)
```

**Pattern:** Always provide mobile first, enhance with md: and lg:

---

## Buttons

### Primary CTA
```
Styling:        bg-accent text-accent-foreground
Padding:        px-10 py-4
Border Radius:  rounded-full
Font Weight:    font-medium
Font Size:      text-lg
Hover:          opacity-90
Shadow:         Optional shadow-lg shadow-black/20
```

### Secondary CTA
```
Styling:        border border-white/50 text-white
Padding:        px-10 py-4
Border Radius:  rounded-full
Font Weight:    font-medium
Font Size:      text-lg
Hover:          bg-white/10
Backdrop:       Optional backdrop-blur-sm
```

---

## Consistency Checklist

When adding new components, verify:

- [ ] Border radius matches component family
- [ ] Spacing uses mobile-first + md:/lg: approach
- [ ] Typography uses design scale (not arbitrary values)
- [ ] Colors from palette only (no hardcoded hex)
- [ ] Hover states are purposeful (not added arbitrarily)
- [ ] Images use hierarchy-based rounding
- [ ] All primary CTAs use px-10 padding
- [ ] Responsive preview tested at sm/md/lg breakpoints

---

## Example: New Feature Checklist

**Adding a new card component:**
1. ✓ Choose radius: rounded-3xl (featured) or rounded-2xl (secondary)
2. ✓ Set padding: Use p-6 md:p-7 or p-8 (depending on prominence)
3. ✓ Add border if subtle: border border-foreground/10
4. ✓ Hover effect: Align with similar components
5. ✓ Text colors: Use foreground/muted-foreground/foreground/70 hierarchy
6. ✓ Spacing above/below: Use pt-8/12 md:pt-24/28 pattern

**Adding a new section:**
1. ✓ Top padding: pt-8 md:pt-10 or pt-24 md:pt-28
2. ✓ Bottom padding: pb-10 md:pb-12 or pb-12 md:pb-16
3. ✓ Background: bg-background (default) or bg-secondary (emphasis)
4. ✓ Content width: max-w-7xl mx-auto px-6 lg:px-8
5. ✓ Title: Use H2 scale (text-5xl lg, text-4xl md, etc)
6. ✓ Subtitle: text-lg text-muted-foreground

---

## Need to Update?

When updating any visual element:
1. Check this reference first
2. Verify against similar components in codebase
3. Maintain consistency within component family
4. Test responsive scaling (sm/md/lg)
5. Verify color contrast ratios

**Questions?** Refer to:
- VISUAL_CONSISTENCY_AUDIT.md (detailed analysis)
- VISUAL_CONSISTENCY_RECOMMENDATIONS.md (specific improvements)
