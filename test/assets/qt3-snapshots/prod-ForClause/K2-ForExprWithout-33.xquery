declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/schema-element
  return $n
};

1
