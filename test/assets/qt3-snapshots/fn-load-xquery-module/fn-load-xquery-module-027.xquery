let $qn-var1 := QName(
  "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
  "var1"
)
return let $module := fn:load-xquery-module(
    "http://www.w3.org/fots/fn/load-xquery-module/import/module",
    map {"variables": map {$qn-var1: "that"}}
  )
  return $module("variables")(
    QName("http://www.w3.org/fots/fn/load-xquery-module/import/module", "var1")
  )
