let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/context-item/module",
  $module := fn:load-xquery-module($module-ns)
return $module("variables")(QName($module-ns, "context"))
