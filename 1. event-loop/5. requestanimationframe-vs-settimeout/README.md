# requestAnimationFrame vs setTimeout

This lab compares animation timing using
`setTimeout` vs `requestAnimationFrame`.

---

## What this lab demonstrates

- `setTimeout` is **not synced** with screen refresh
- `requestAnimationFrame` runs **before paint**
- Browsers optimize rAF for smooth animations

---

## What to observe

- setTimeout animation may:
  - Stutter
  - Drift over time
- rAF animation feels smoother and consistent

---

## Why this happens

### setTimeout
- Runs as a macrotask
- Can drift due to:
  - Main thread load
  - Timer clamping
  - Background tabs

### requestAnimationFrame
- Called right before paint
- Aligned to display refresh rate
- Paused automatically in inactive tabs

---

## Real-world impact

- Animations
- Progress indicators
- Scroll-linked effects

---

## Interview-ready takeaway

> “requestAnimationFrame aligns work with the browser’s rendering cycle, while setTimeout does not.”

---

## Rule of thumb

- UI animation → requestAnimationFrame
- Delayed logic → setTimeout
