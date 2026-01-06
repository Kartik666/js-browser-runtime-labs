# Long Microtask Blocking Render

This lab shows that **long-running microtasks block rendering**,
even when DOM updates have already happened.

---

## What this lab demonstrates

- DOM updates are queued
- Rendering waits for microtasks to finish
- `requestAnimationFrame` is delayed

---

## Expected behavior

1. Click button
2. Box does NOT move immediately
3. UI freezes for ~2 seconds
4. Box jumps after microtask completes

---

## Why this happens

- Browser updates DOM styles
- Rendering is deferred
- Microtask queue must finish first

---

## Key insight

> DOM mutation ≠ immediate paint

Rendering only happens when:
- Call stack is empty
- Microtask queue is drained

---

## Real-world impact

- Heavy logic after `await`
- Large state updates
- Expensive calculations in async flows

All can cause **invisible UI freezes**

---

## Interview-ready takeaway

> “Long microtasks block rendering just like synchronous code.”

---

## Fix patterns

- Move work to Web Workers
- Split tasks with `setTimeout`
- Yield using `requestAnimationFrame`
