declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/import
  return $n
};

1
