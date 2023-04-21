import http from "k6/http";
import { URLSearchParams } from "https://jslib.k6.io/url/1.0.0/index.js";

const BASE_URL = "https://docs.pytest.org/en/stable/";
const SEARCH = "search.html";

export function search_api(q) {
  /*** 搜尋文件網頁
  q(str): 關鍵字
  ***/
  const url_with_params = new URLSearchParams([["q", q]]);
  const URL = `${BASE_URL.concat(SEARCH)}?${url_with_params.toString()}`;
  const params = {
    tags: { my_custom_tag: "search_api" },
  };
  let response = http.request("GET", URL, {}, params);
  return response;
}
