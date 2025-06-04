declare default element namespace "http://www.w3.org/XQueryTest/testcases";

declare namespace tc = "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var := validate lax { <Unknown> {
        element z {
          "12.345"
        }
      }</Unknown> }
return count($var/element(*, xs:decimal))
