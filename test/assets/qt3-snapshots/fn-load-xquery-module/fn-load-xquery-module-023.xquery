let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/import/module",
  $module := fn:load-xquery-module($module-ns),
  $mod1-ns := "http://www.w3.org/TestModules/module1"
return let $fns := $module("functions")
  return $fns(QName($mod1-ns, "x"))(0)()
