declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/some
  return $n
};

1
