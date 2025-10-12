declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/element
  return $n
};

1
