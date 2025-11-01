for $before in (true(), false())
return let $name := "fn:substring-" ||
    (
      if ($before) then
        "before"
      else
        "after"
    )
  let $function := function-lookup(xs:QName($name), 2)
  return fn:replace("1234", ".(..)", $function)
