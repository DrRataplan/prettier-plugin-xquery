let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/context/module",
  $module := fn:load-xquery-module($module-ns, map {"xquery-version": 3.1})
(: If a Saxon extension is available in the calling context then we expect it to be available in the called context,
         and vice versa :)
return $module("functions")(QName($module-ns, "saxon-functions-available"))(1)(
    exists(function-lookup(fn:QName("http://saxon.sf.net/", "type"), 1))
  )
