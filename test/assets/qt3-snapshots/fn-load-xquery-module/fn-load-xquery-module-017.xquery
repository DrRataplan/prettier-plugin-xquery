let $module := fn:load-xquery-module(
  "http://www.w3.org/fots/fn/load-xquery-module/context-item/module",
  map {"context-item": <a><b>hello</b></a>}
)
return $module("variables")(
  QName(
    "http://www.w3.org/fots/fn/load-xquery-module/context-item/module",
    "context"
  )
)
