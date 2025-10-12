let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/load/module",
  $module-valid-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/load/module",
  $module := fn:load-xquery-module($module-ns)
return $module("variables")(QName($module-ns, "var3"))("variables")
