declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/following-sibling
  return $n
};

1
