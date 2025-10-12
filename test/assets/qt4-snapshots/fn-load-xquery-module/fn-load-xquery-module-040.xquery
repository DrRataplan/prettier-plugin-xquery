let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/decimal-format/module",
  $module := fn:load-xquery-module($module-ns)
return let $fns := $module("functions")
  return $fns(QName($module-ns, "func"))(1)(1234567.765)
