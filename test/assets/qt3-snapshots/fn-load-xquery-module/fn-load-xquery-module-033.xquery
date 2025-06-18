let $module-ns :=
  "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
  $qn-var1 := QName($module-ns, "var1"),
  $qn-var2 := QName($module-ns, "var2"),
  $qn-var3 := QName($module-ns, "var3")
return let $module1 := fn:load-xquery-module(
      $module-ns,
      map {
        "variables":
          map {
            $qn-var1: "some value",
            $qn-var2: 42,
            $qn-var3: map {"a": 1, "b": 2, "c": (3, 4, 5)}
          }
      }
    ),
    $module2 := fn:load-xquery-module(
      $module-ns,
      map {
        "variables":
          map {
            $qn-var1: "another value",
            $qn-var3: map {"a": 14, "b": "different"}
          }
      }
    )
  return (
      $module1("variables")($qn-var1),
      $module1("variables")($qn-var2),
      $module1("variables")($qn-var3)("b"),
      $module1("functions")(QName($module-ns, "get-var1"))(0)(),
      $module1("functions")(QName($module-ns, "get-var2"))(0)(),
      $module2("variables")($qn-var1),
      $module2("variables")($qn-var2),
      $module2("variables")($qn-var3)("b"),
      $module2("functions")(QName($module-ns, "get-var1"))(0)(),
      $module2("functions")(QName($module-ns, "get-var2"))(0)()
    )
