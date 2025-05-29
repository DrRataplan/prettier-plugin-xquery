let $module := fn:load-xquery-module("http://www.w3.org/TestModules/test1")
return $module("functions")(QName("http://www.w3.org/TestModules/test1", "ok"))(
    0
  )()
