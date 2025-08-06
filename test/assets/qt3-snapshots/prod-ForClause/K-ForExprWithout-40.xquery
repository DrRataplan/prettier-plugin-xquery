for $foo in 1
return $bar +
  (
    for $bar in 2
    return $bar
  )
