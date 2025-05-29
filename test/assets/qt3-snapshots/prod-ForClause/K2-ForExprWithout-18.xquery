declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/attribute
  return $n
};

1
