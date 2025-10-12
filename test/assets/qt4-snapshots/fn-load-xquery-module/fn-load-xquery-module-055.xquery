import schema default element namespace  "http://www.w3.org/XQueryTest/abf";

let $module-ns :=
"http://www.w3.org/fots/fn/load-xquery-module/import-schema/module"
let $module := fn:load-xquery-module($module-ns)
let $c := (<a />, <b />, <c />, <f />)
return validate strict { $module("functions")(QName($module-ns, "abf"))(1)($c) }
