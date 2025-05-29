let $all := fn:available-environment-variables(),
  $n := count(fn:available-environment-variables())
return count(
    for $e in $all
    return fn:environment-variable($e)
  ) eq
    $n
