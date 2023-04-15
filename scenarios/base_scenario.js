var BASE_SHARED_ITERATIONS_SCENARIO = {
  // The iterations are shared between the number of VUs. The test ends once all iterations are executed
  executor: "shared-iterations",
  vus: 10,
  iterations: 200,
  maxDuration: "30s",
};

var BASE_PER_VU_ITERATIONS_SCENARIO = {
  // Each VU executes an exact number of iterations.
  executor: "per-vu-iterations",
  vus: 10,
  iterations: 20,
  maxDuration: "30s",
};

var BASE_CONSTANT_VUS = {
  // A fixed number of VUs execute as many iterations as possible for a specified amount of time
  executor: "constant-vus",
  vus: 10,
  duration: "30s",
};

var BASE_RAMPING_VUS = {
  // A variable number of VUs execute as many iterations as possible for a specified amount of time.
  executor: "ramping-vus",
  startVUs: 0,
  stages: [
    { duration: "20s", target: 10 },
    { duration: "10s", target: 0 },
  ],
  gracefulRampDown: "0s",
};

var BASE_CONSTANT_ARRIVAL_RATE = {
  // A fixed number of iterations are started in a specified period of time.
  executor: "constant-arrival-rate",
  duration: "30s",
  rate: 30,
  timeUnit: "1s",
  preAllocatedVUs: 2,
  maxVUs: 50,
};

var BASE_RAMPING_ARRIVAL_RATE = {
  // A variable number of iterations are started in specified periods of time.
  executor: "ramping-arrival-rate",
  startRate: 300,
  timeUnit: "1m",
  preAllocatedVUs: 2,
  maxVUs: 50,

  stages: [
    { target: 300, duration: "1m" },
    { target: 600, duration: "2m" },
    { target: 600, duration: "4m" },
    { target: 60, duration: "2m" },
  ],
};

var BASE_EXTERNALLY_CONTROLLED = {
  // This executor does the same job by providing a better API that can be used to control k6 execution at runtime.
  executor: "externally-controlled",
  vus: 10,
  maxVUs: 50,
  duration: "10m",
};

export {
  BASE_SHARED_ITERATIONS_SCENARIO,
  BASE_PER_VU_ITERATIONS_SCENARIO,
  BASE_CONSTANT_VUS,
  BASE_RAMPING_VUS,
  BASE_CONSTANT_ARRIVAL_RATE,
  BASE_RAMPING_ARRIVAL_RATE,
  BASE_EXTERNALLY_CONTROLLED,
};
