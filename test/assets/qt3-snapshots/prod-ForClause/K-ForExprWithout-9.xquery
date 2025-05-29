3 eq
  (
    for $foo in 1
    return for $foo in 3
      return $foo
  )
