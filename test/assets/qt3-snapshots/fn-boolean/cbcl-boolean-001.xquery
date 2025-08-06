declare function local:generate ($count as xs:integer) {
  if ($count < 0) then
    "string"
  else
    for $x in 1 to $count
    return if ($x mod 3 = 0) then
      <a />
    else if ($x mod 3 = 1) then
      <b />
    else
      <c />
};

fn:boolean(fn:reverse(local:generate(5)))
