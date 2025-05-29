3 eq
  (
    for $foo in 1
    return for $bar in 2
      return $bar + $foo
  )
