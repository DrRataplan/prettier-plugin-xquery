let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/load-self/module",
  $module := fn:load-xquery-module(
    $module-ns,
    map {"variables": map {QName($module-ns, "b"): true()}}
  )
return $module("variables")(QName($module-ns, "var1"))("variables")(
    QName($module-ns, "var1")
  )
