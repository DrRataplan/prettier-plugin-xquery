declare function local:gYear ($gYear as xs:gYear, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gYear
};

local:gYear(xs:gYear("1972"), fn:false()) ne xs:gYear("1972")
