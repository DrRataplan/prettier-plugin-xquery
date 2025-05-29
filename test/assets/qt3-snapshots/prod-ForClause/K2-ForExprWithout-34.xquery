declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/item
  return $n
};

1
