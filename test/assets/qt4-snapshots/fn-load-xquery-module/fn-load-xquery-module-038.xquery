import module namespace test = "http://www.w3.org/fots/fn/load-xquery-module/load-self/module";

(
  $test:b,
  ($test:var1)("variables")(
    QName("http://www.w3.org/fots/fn/load-xquery-module/load-self/module", "b")
  ),
  ($test:var1)("variables")(
    QName(
      "http://www.w3.org/fots/fn/load-xquery-module/load-self/module",
      "var1"
    )
  )
)
