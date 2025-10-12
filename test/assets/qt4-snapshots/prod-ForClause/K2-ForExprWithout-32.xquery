declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/schema-attribute
  return $n
};

1
