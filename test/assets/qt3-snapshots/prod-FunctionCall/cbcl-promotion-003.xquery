declare function local:index-of (
  $seq as xs:integer*,
  $item as xs:integer?
) as xs:float* {
  if (empty($item)) then
    -1
  else
    for $x at $p in $seq
    return if ($x eq $item) then
      $p
    else (
    )
};

local:index-of(1 to 10, 3)
