let $one := ("a", "b", "c", "d", 12, 13)
return let $two := ("a", "B", "c", "D", 12, 14)
  return for-each-pair($one, $two, function ($a, $b) {
        $a eq $b
      })
