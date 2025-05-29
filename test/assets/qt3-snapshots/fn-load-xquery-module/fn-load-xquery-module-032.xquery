import module namespace evm = "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module";

let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module"
let $module :=
  fn:load-xquery-module(
    $module-ns,
    map {
      "variables":
        map {
          QName($module-ns, "var1"): "that",
          QName($module-ns, "var3"): map {1: "b"}
        }
    }
  )
return (
    $module("functions")(QName($module-ns, "get-var1"))(0)(),
    evm:get-var1(),
    $module("variables")(QName($module-ns, "var3"))?1,
    $evm:var3(1)
  )
