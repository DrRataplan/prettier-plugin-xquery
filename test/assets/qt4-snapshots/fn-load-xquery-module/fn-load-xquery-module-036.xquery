let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/load/module",
  $module-valid-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/valid/module",
  $module := fn:load-xquery-module($module-ns)
return (
    $module("functions")(QName($module-ns, "get-var1"))(0)(),
    $module("variables")(QName($module-ns, "var1")),
    $module("variables")(QName($module-ns, "var3"))("variables")(
      QName($module-valid-ns, "var1")
    ),
    $module("variables")(QName($module-ns, "var3"))("functions")(
      QName($module-valid-ns, "func1")
    )(0)()
  )
