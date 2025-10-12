let $module := fn:load-xquery-module(
  "http://www.w3.org/fots/fn/load-xquery-module/context-item/module",
  map {"context-item": <a><b>hello</b></a>}
)
return let $f := $module("functions")(
    QName(
      "http://www.w3.org/fots/fn/load-xquery-module/context-item/module",
      "get-context-child"
    )
  )(0)
  return $f()
