xquery version "3.0";

declare namespace s = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

(
  validate strict { <s:cuckoo><s:sub-U>12</s:sub-U></s:cuckoo> }
)/* instance of schema-element(s:u)
