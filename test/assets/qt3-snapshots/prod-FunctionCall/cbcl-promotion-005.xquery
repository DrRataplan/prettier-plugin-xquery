declare function local:index-of ($seq, $item) as xs:double? {
  for $x in $seq
  return if ($x eq $item) then
      $p
    else (
    )
};

local:index-of((1, 2.0, xs:float(3), 2), 2)
