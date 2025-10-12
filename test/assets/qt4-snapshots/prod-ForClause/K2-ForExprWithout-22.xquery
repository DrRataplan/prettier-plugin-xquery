declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/text
  return $n
};

1
