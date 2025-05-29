let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/valid/module",
  $module := fn:load-xquery-module($module-ns, map {"xquery-version": 3.1})
return (
    $module("variables")(QName($module-ns, "var3")),
    $module("functions")(QName($module-ns, "func3"))
  )
