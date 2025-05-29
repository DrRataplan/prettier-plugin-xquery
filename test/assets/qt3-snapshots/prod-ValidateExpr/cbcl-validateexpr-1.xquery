declare default element namespace "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var :=
  validate lax {
    <Unknown xsi:type="tc:choice" xmlns:tc="http://www.w3.org/XQueryTest/testcases"> {
      element a {
        element z {
          "12.345"
        }
      }
    }</Unknown>
    }
return $var
