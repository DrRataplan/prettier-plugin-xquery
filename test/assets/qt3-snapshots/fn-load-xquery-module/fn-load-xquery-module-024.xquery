let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/import/module",
  $module := fn:load-xquery-module($module-ns),
  $mod1-ns := "http://www.w3.org/TestModules/module1",
  $mod2-ns := "http://www.w3.org/TestModules/module2"
return let $fns := $module("functions")
  return $fns(QName($mod2-ns, "y"))(0)()
