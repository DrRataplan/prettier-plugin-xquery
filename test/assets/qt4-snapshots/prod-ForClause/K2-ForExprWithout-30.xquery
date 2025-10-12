declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/ordered
  return $n
};

1
