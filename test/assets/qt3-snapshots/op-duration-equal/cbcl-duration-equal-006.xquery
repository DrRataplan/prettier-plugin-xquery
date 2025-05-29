declare function local:duration (
  $duration as xs:duration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $duration
};

local:duration(xs:duration("P1DT1H"), fn:false()) ne xs:duration("P1DT1H")
