declare function local:repeat (
  $count as xs:integer,
  $arg as xs:string
) as xs:string* {
  if ($count le 0) then
    ""
  else
    for $x in 1 to $count
    return $arg
};

string-join(
  for $x in 0 to 4
  return local:repeat($x, "a"),
  " "
) and
  string-join(
    for $x in 0 to 4
    return local:repeat($x, "a"),
    ""
  )
