declare function local:f ($x) {
  if ($x mod 2 = 1) then
    <a />
  else
    "a"
};

let $y :=
  for $x in (1 to 10)
  return <e>{
        $x
      }</e>
return $y/local:f(.)/a
