let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/functions/module",
  $module := fn:load-xquery-module($module-ns)
return let $fns := $module("functions")
  return let $fns-values :=
      (
        $fns(QName($module-ns, "func1"))(0)(),
        $fns(QName($module-ns, "func1"))(1)("something"),
        $fns(QName($module-ns, "func2"))(0)(),
        $fns(QName($module-ns, "func2"))(1)("something")
      )
    return $fns-values
