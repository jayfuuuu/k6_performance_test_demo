import http from "k6/http";

const BASE_URL = "https://test.k6.io/";
const CONTACTS = "contacts.php";
const NEWS = "news.php";

export function contacts_api() {
  /*** 聯繫資訊網頁
   ***/
  const URL = BASE_URL.concat(CONTACTS);
  const params = {
    tags: { my_custom_tag: "contacts_api" },
  };
  let response = http.request("GET", URL, {}, params);
  return response;
}

export function news_api() {
  /*** 歷史消息網頁
   ***/
  const URL = BASE_URL.concat(NEWS);
  const params = {
    tags: { my_custom_tag: "news_api" },
  };
  let response = http.request("GET", URL, {}, params);
  return response;
}
