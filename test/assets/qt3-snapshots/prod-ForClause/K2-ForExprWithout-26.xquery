declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/let
  return $n
};

1
