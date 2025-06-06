declare default element namespace "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var := validate strict { <Unknown>{
        element z {
          "12.345"
        }
      }</Unknown> }
return $var
