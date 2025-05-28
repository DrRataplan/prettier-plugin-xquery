declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

let $f := function () as lu:namespaceSensitiveUnionType {
    node-name(<a />)
  }
return local-name-from-QName($f())
