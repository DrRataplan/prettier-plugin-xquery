let $qn-var1 :=
  QName(
    "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
    "var1"
  ),
  $qn-var2 :=
  QName(
    "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
    "var2"
  ),
  $qn-var3 :=
  QName(
    "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
    "var3"
  ),
  $qn-var4 :=
  QName(
    "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
    "var4"
  )
return let $module :=
    fn:load-xquery-module(
      "http://www.w3.org/fots/fn/load-xquery-module/external-vars/module",
      map {
        "variables":
          map {
            $qn-var2: 42,
            $qn-var3: map {"a": 1, "b": 2, "c": (3, 4, 5)},
            $qn-var4: "the other"
          }
      }
    )
  return (
      $module("variables")($qn-var1),
      $module("variables")($qn-var2),
      $module("variables")($qn-var3)("b"),
      $module("variables")($qn-var4)
    )
