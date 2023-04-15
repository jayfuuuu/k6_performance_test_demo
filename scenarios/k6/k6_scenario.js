import {
  BASE_SHARED_ITERATIONS_SCENARIO,
  BASE_CONSTANT_VUS,
} from "../base_scenario.js";

var SHARED_ITERATIONS_SCENARIO = BASE_SHARED_ITERATIONS_SCENARIO;
SHARED_ITERATIONS_SCENARIO["vus"] = 30;
SHARED_ITERATIONS_SCENARIO["iterations"] = 100;
SHARED_ITERATIONS_SCENARIO["exec"] = "contacts";

var CONSTANT_VUS = BASE_CONSTANT_VUS;
CONSTANT_VUS["vus"] = 50;
CONSTANT_VUS["exec"] = "news";

export { SHARED_ITERATIONS_SCENARIO, CONSTANT_VUS };