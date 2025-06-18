let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/import-vars/module",
  $module-ext :=
  "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module"
return let $module := fn:load-xquery-module(
    $module-ns,
    map {"variables": map {QName($module-ext, "var3"): map {}}}
  )
  return $module("functions")(QName($module-ns, "and"))(0)()
