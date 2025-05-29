let $module :=
  fn:load-xquery-module(
    "http://www.w3.org/fots/fn/load-xquery-module/import-func/module"
  )
return $module("functions")(
    QName("http://www.w3.org/fots/fn/load-xquery-module/valid/module", "func1")
  )
