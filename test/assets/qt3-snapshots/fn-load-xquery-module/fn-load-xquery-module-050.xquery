let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/import-schema/module",
  $module := fn:load-xquery-module($module-ns)
return $module("functions")(QName($module-ns, "hatsize"))(1)(8)
