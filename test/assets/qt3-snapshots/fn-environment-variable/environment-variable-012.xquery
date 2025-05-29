let $var :=
  string-join(
    for $i in (1 to (1024 * 1024))
    return "x"
  )
return empty(fn:environment-variable($var))
