(
  let $a := 92, $b := true()
  return function ($c) {
      $a, $b, $c
    }
)("lala")
