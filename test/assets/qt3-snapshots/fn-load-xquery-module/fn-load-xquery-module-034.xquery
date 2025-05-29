let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
  $qn-var1 := QName($module-ns, "var1"),
  $qn-var2 := QName($module-ns, "var2"),
  $qn-var3 := QName($module-ns, "var3")
return let $module :=
    fn:load-xquery-module(
      "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
      map {
        "variables":
          map {
            $qn-var1: "some value",
            $qn-var2: 42,
            $qn-var3:
              fn:load-xquery-module(
                "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
                map {
                  "variables": map {$qn-var1: "  a string", $qn-var3: map {}}
                }
              )
          }
      }
    )
  return (
      $module("variables")($qn-var1),
      $module("variables")($qn-var2),
      $module("variables")($qn-var3)("functions")(
        QName($module-ns, "get-var1")
      )(0)(),
      $module("variables")($qn-var3)("functions")(
        QName($module-ns, "get-var2")
      )(0)()
    )
