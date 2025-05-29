(
  let $a := 92, $b := true()
  return function ($c) {
      $a, $b, $c
    }
)((xs:QName("foo"), 5.0e3))
