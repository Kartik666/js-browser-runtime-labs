# Promise Starvation Demo

This lab demonstrates **microtask starvation**, where the browser
never gets a chance to run macrotasks or render.

---

## What this lab shows

- Microtasks can recursively schedule themselves
- Macrotasks (`setTimeout`) may never execute
- Rendering can be completely blocked

---

## How to run

1. Open `index.html`
2. Open DevTools → Console
3. Click **Start Starvation**
4. Click **setTimeout Test**

---

## What you’ll observe

- Console floods with `🟢 microtask running`
- `setTimeout` callback **never runs**
- Browser may become sluggish or freeze

---

## Why this happens

- The browser **must fully drain the microtask queue**
- New microtasks keep getting added
- Event loop never reaches:
  - Rendering
  - Macrotasks

---

## Real-world implications

- Infinite Promise chains
- Recursive `then()` calls
- Heavy async state updates

All can **freeze the UI without blocking syntax**

---

## Interview-ready takeaway

> “Microtasks have higher priority than rendering and macrotasks, and can starve the event loop.”

---

## Fix strategies

- Break work using `setTimeout`
- Yield using `requestAnimationFrame`
- Move work to Web Workers
