declare namespace lu = "http://www.w3.org/XQueryTest/ListUnionTypes";

import schema  "http://www.w3.org/XQueryTest/ListUnionTypes";

let $f :=
  function () as lu:namespaceSensitiveUnionType { xs:untypedAtomic("xsi:type") }
return local-name-from-QName($f())
