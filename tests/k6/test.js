import { check } from "k6";

import {
  SHARED_ITERATIONS_SCENARIO,
  CONSTANT_VUS,
} from "../../scenarios/k6/k6_scenario.js";

import { contacts_api, news_api } from "../../api/k6/api.js";

export const options = {
  scenarios: {
    contacts: SHARED_ITERATIONS_SCENARIO,
    news: CONSTANT_VUS,
  },
};

export function contacts() {
  let res = contacts_api();
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  // console.log(res);
}

export function news() {
  let res = news_api();
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  // console.log(res);
}
