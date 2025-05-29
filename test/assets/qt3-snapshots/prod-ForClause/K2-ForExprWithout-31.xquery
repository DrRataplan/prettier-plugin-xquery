declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/unordered
  return $n
};

1
