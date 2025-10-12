let $qn-var1 := QName(
    "http://www.w3.org/fots/fn/load-xquery-module/external-var/module",
    "var1"
  ),
  $test-value := "some value"
return let $module := fn:load-xquery-module(
    "http://www.w3.org/fots/fn/load-xquery-module/external-var/module",
    map {"variables": map {$qn-var1: $test-value}}
  )
  return $module("variables")($qn-var1)
