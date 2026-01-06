# Web Worker Offloading Demo

This lab demonstrates how **Web Workers prevent UI blocking**
by moving heavy computation off the main thread.

---

## What this lab shows

- Main thread blocking freezes rendering
- Web Workers keep UI responsive
- DOM updates remain smooth

---

## How to test

1. Click **Run on Main Thread**
   - UI freezes
   - Box moves late

2. Click **Run in Web Worker**
   - Box moves immediately
   - UI stays responsive

---

## Why this works

- Workers run on a separate thread
- No access to DOM
- Communicate via messages

---

## Real-world use cases

- Data processing
- Large calculations
- Image / audio processing
- Parsing large JSON

---

## Interview-ready takeaway

> “If work is CPU-heavy and not UI-related, it belongs in a Web Worker.”

---

## Rule of thumb

- Short UI logic → main thread
- Heavy computation → worker
