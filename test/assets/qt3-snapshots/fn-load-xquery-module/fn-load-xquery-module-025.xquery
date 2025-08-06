let $module := fn:load-xquery-module(
  "http://www.w3.org/fots/fn/load-xquery-module/import-vars/module"
)
return $module("variables")(
  QName("http://www.w3.org/fots/fn/load-xquery-module/valid/module", "var1")
)
