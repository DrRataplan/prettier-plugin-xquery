declare default element namespace "http://www.w3.org/XQueryTest/testcases";

declare namespace tc = "http://www.w3.org/XQueryTest/testcases";

import schema  "http://www.w3.org/XQueryTest/testcases";

let $var :=
  validate lax {
    <Unknown xsi:type="tc:choice">{ element a { "foo" } }</Unknown>
    }
return $var
