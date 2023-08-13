var { Worker } = require("worker_threads");

var doFib = (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();
    const worker = new Worker("./worker.js", { workerData: { iterations } });
    worker.on("message", (result) => {
      console.log(`doFib done in: ${Date.now() - start}ms`);
      resolve(result);
    });
    worker.on("error", reject);
  });
};

var main = async () => {
  const start = Date.now();

  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log("values: ", values);
  console.log(`ALL DONE in: ${Date.now() - start}ms`);
};
// main().catch(console.err);

var { Worker } = require("worker_threads");
const sharedBuffer = new SharedArrayBuffer(40);
const buffer = new Uint32Array(sharedBuffer);

var doFib = (iterations) => {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const worker = new Worker("./buffer.js", {
      workerData: { iterations, sharedBuffer },
    });

    worker.on("message", () => {
      console.log(`doFib done in: ${Date.now() - start}ms`);
      resolve();
    });

    worker.on("error", reject);
  });
};

var main = async () => {
  const start = Date.now();

  await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log("buffer: ", buffer);
  console.log(`ALL DONE in: ${Date.now() - start}ms`);
};
main().catch(console.err);
