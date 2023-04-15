import { check } from "k6";

import { CONSTANT_ARRIVAL_RATE } from "../../scenarios/pytest/pytest_scenario.js";

import { search_api } from "../../api/pytest/api.js";

export const options = {
  scenarios: {
    search: CONSTANT_ARRIVAL_RATE,
  },
};

export function search() {
  let res = search_api("pytest");
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
  // console.log(res);
}
