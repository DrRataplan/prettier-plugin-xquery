declare default element namespace "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var := validate lax {
  <Unknown
    xmlns:tc="http://www.w3.org/XQueryTest/testcases"
    xsi:type="tc:choice"
  >{ element a { element z { "12.345" } } }</Unknown>
  }
return $var
