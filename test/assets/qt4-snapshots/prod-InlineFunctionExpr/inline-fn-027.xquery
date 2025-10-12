let $calc := map {
  "+": function ($a, $b) { $a + $b },
  "-": function ($a, $b) { $a - $b },
  "*": function ($a, $b) { $a * $b },
  "/": function ($a, $b) { $a div $b }
}
return $calc("*")(2, 3)
