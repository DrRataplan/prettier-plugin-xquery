declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/for
  return $n
};

1
