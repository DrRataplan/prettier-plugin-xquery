let $module := fn:load-xquery-module(
  "http://www.w3.org/fots/fn/load-xquery-module/import-self/module"
)
return $module("variables")(
    QName(
      "http://www.w3.org/fots/fn/load-xquery-module/import-self/module",
      "var1"
    )
  )
