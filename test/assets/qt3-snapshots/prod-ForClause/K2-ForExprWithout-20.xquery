declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/processing-instruction
  return $n
};

1
