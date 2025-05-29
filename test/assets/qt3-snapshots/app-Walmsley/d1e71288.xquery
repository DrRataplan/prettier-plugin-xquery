declare function local:random-sequence (
  $length as xs:integer,
  $rng as map(xs:string, item())
) {
  if ($length eq 0) then (
  ) else (
    $rng?number, local:random-sequence($length - 1, $rng?next())
  )
};

local:random-sequence(5, random-number-generator())
