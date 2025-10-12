declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/typeswitch
  return $n
};

1
