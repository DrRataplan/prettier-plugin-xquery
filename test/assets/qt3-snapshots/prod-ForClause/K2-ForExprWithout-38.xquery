declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/castable
  return $n
};

1
