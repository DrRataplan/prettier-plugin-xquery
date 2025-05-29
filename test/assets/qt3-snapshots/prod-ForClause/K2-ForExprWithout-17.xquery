declare function local:func ($arg as element()*) as element()* {
  for $n in $arg/document-node
  return $n
};

1
