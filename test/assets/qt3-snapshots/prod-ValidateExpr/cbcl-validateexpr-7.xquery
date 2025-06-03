declare default element namespace "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var :=
  validate strict {
    <Unknown
      xmlns:tc="http://www.w3.org/XQueryTest/testcases"
      xsi:type="tc:choice"
    >{
        element z {
          "12.345"
        }
      }</Unknown>
    }
return $var
