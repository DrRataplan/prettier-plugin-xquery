let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/context/module",
  $module := fn:load-xquery-module($module-ns, map {"xquery-version": 3.1})
return $module("functions")(QName($module-ns, "standard-functions-available"))(
    0
  )()
