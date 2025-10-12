declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/declare
  return $n
};

1
