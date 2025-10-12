declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/comment
  return $n
};

1
