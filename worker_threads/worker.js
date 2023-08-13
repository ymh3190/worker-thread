const { workerData, parentPort } = require("worker_threads");

const fib = (n) => {
  return n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
};

const result = fib(workerData.iterations);
parentPort.postMessage(result);
