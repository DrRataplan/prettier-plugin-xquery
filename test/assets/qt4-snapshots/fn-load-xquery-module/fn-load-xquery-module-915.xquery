let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/valid/module",
  $module := fn:load-xquery-module($module-ns, map {"xquery-version": 93.7})
return $module
