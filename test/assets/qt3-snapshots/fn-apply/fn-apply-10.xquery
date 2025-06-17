for $f in
  (
    function ($a) { $a },
    function ($a, $b) { $a + $b },
    function ($a, $b, $c) { $a + $b + $c }
  )
return apply($f, array{ 1 to function-arity($f) })
