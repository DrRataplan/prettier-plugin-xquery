declare default element namespace "http://www.w3.org/XQueryTest/abf";

let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/import-schema/module"
let $module := fn:load-xquery-module($module-ns)
let $c := (<a />, <b />, <f />)
return $module("functions")(QName($module-ns, "validate"))(1)($c)
