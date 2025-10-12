declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/child
  return $n
};

1
