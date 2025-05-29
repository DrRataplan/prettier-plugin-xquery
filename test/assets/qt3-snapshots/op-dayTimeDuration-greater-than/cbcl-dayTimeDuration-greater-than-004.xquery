declare function local:dayTimeDuration (
  $dayTimeDuration as xs:dayTimeDuration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $dayTimeDuration
};

local:dayTimeDuration(xs:dayTimeDuration("P0D"), fn:false()) gt
  xs:dayTimeDuration("P0D")
