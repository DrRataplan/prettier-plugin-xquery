declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/validate
  return $n
};

1
