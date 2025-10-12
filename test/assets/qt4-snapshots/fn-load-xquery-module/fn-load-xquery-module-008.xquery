let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/external-var/module",
  $module := fn:load-xquery-module($module-ns, map {})
return $module("variables")(QName($module-ns, "var1"))
