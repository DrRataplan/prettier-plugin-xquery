import module namespace vm = "http://www.w3.org/fots/fn/load-xquery-module/valid/module";

let $module-ns := "http://www.w3.org/fots/fn/load-xquery-module/valid/module"
let $module := fn:load-xquery-module($module-ns)
return ($module("functions")(QName($module-ns, "func1"))(0)(), vm:func2())
