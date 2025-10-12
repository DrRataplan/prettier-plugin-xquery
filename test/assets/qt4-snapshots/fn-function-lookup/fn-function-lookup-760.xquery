let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/valid/module",
  $module := function-lookup(
    fn:QName("http://www.w3.org/2005/xpath-functions", "load-xquery-module"),
    1
  )($module-ns)
return let $vars := $module("variables"), $fns := $module("functions")
  return let $var-values := (
        $vars(QName($module-ns, "var1")), $vars(QName($module-ns, "var2"))
      ),
      $fns-values := (
        $fns(QName($module-ns, "func1"))(0)(),
        $fns(QName($module-ns, "func2"))(0)()
      )
    return ($var-values, $fns-values)
