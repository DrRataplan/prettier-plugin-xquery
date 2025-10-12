declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/if
  return $n
};

1
