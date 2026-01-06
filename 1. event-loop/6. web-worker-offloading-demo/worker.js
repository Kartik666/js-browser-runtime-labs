self.onmessage = (e) => {
  const { duration } = e.data;
  const start = performance.now();

  while (performance.now() - start < duration) {}

  self.postMessage("done");
};
