let $f := concat#123456, $n := function-name($f)
return (
  local-name-from-QName($n), namespace-uri-from-QName($n), function-arity($f)
)
