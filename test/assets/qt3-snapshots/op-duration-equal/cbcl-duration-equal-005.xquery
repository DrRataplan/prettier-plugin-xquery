declare function local:duration (
  $duration as xs:duration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $duration
};

exists(
  local:duration(xs:duration("P1DT1H"), fn:true()) ne xs:duration("P1DT1H")
)
