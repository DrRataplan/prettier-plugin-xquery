for $name in (true#0, count#1, empty#1, concat#2)
return let $arity := function-arity($name), $args := array { (1 to $arity)!"X" }
  return apply($name, $args)
