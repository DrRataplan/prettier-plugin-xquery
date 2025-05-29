declare function local:gDay ($gDay as xs:gDay, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gDay
};

local:gDay(xs:gDay("---31"), fn:false()) ne xs:gDay("---31")
