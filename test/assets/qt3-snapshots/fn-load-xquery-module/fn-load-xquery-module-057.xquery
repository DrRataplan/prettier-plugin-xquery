declare default element namespace "http://www.w3.org/XQueryTest/abf";

let $module-ns :=
"http://www.w3.org/fots/fn/load-xquery-module/import-schema/module"
let $module := fn:load-xquery-module(
  $module-ns,
  map {
    "variables":
      map {QName($module-ns, "c"): <outer><a /><b /><d /><f /></outer>}
  }
)
return $module("functions")(QName($module-ns, "validate"))(0)()
