| Change Type   | Pipeline Impact        |
| ------------- | ---------------------- |
| background    | Style → Paint          |
| width         | Style → Layout → Paint |
| border-radius | Paint                  |
| transform     | Composite only (GPU)   |

Transforms & opacity are the cheapest changes

# Rendering Pipeline Simulator

This lab demonstrates how the browser rendering pipeline works and how
JavaScript interacts with it.

## Topics Covered

- Style, Layout, Paint, Composite
- requestAnimationFrame
- Layout Thrashing
- Microtask Starvation
- JS Blocking Rendering
- GPU Compositing

## Key Takeaways

- JS runs before rendering
- Microtasks can starve paint
- Layout is expensive
- Transforms & opacity are cheap
- rAF is the correct animation primitive

## Open DevTools

- Performance tab
- Rendering tab → Paint flashing
- Layers panel
