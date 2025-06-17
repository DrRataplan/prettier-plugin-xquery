declare variable $var := (
  for $i in 1 to 100
  return <e>{ $i }</e>
);

$var[last()]
