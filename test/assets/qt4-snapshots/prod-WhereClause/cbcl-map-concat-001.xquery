declare function local:f ($x) {
  if ($x) then
    true()
  else (
  )
};

declare function local:g ($x) {
  if ($x) then
    "true"
  else
    "false"
};

let $x := local:g(true())
for $y in local:f($x)
return ($y, $x)
