# js-browser-runtime-labs
A hands-on laboratory to understand how the browser actually works — beyond frameworks.  This repository explores the JavaScript runtime, browser rendering pipeline, and performance characteristics through small, focused experiments with visual explanations and benchmarks.

Most frontend developers know what to write, but not why the browser behaves the way it does.

This repo is meant to:
Build deep intuition about the JS runtime
Explain browser internals with runnable demos
Serve as a long-term reference for interviews and real-world debugging

# Repo Structure
js-browser-runtime-labs/
│
├── event-loop/
│ ├── microtasks-vs-macrotasks/
│ ├── async-await-timing/
│ └── promises-queue-order/
│
├── rendering-pipeline/
│ ├── layout-paint-composite/
│ ├── reflow-vs-repaint/
│ └── transform-vs-top-left/
│
├── performance/
│ ├── debounce-vs-throttle/
│ ├── long-tasks-blocking/
│ └── requestanimationframe/
│
├── memory/
│ ├── memory-leaks-dom/
│ ├── closures-retention/
│ └── gc-behaviour-notes.md/
│
├── utils/
│ └── benchmark.js
│
└── README.md

# Labs Breakdown
1️⃣ Event Loop Labs

Call stack
Microtask queue
Macrotask queue
Rendering phase
Examples
setTimeout vs Promise.then
async/await execution order
Starvation scenarios

2️⃣ Rendering Pipeline Labs

Style calculation
Layout (reflow)
Paint
Composite
Experiments
top/left vs transform
Layout thrashing
Forced synchronous layouts

3️⃣ Performance Labs

Long tasks (>50ms)
Main thread blocking
Frame drops
Experiments
Debounce vs throttle benchmarks
requestAnimationFrame usage
Idle callbacks

4️⃣ Memory Labs

Heap vs stack
Garbage collection basics
Memory leaks
Experiments
Detached DOM nodes
Event listener leaks
Closure retention


# Clone repo
git clone https://github.com/<your-username>/js-browser-runtime-labs


# Open any lab directly
open index.html
