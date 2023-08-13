const { threadId, workerData, parentPort } = require("worker_threads");

const fib = (n) => {
  return n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};

const buffer = new Uint32Array(workerData.sharedBuffer);
buffer[threadId - 1] = fib(workerData.iterations);

parentPort.postMessage("done");
