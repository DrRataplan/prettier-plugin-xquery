declare function local:dayTimeDuration (
  $dayTimeDuration as xs:dayTimeDuration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $dayTimeDuration
};

exists(
  local:dayTimeDuration(xs:dayTimeDuration("P0D"), fn:true()) gt
    xs:dayTimeDuration("P0D")
)
