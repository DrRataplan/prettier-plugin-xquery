let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/valid/module",
  $module := fn:load-xquery-module($module-ns, map {"variables": map {}})
return (
  $module("variables")(QName($module-ns, "var1")),
  $module("variables")(QName($module-ns, "var2")),
  $module("functions")(QName($module-ns, "func1"))(0)(),
  $module("functions")(QName($module-ns, "func2"))(0)()
)
