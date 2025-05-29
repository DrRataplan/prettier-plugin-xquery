declare default element namespace "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var :=
  validate strict {
    <Unknown xsi:type="tc:choice" xmlns:tc="http://www.w3.org/XQueryTest/testcases"> {
      element a {
        "12.345"
      }
    }</Unknown>
    }
return $var
