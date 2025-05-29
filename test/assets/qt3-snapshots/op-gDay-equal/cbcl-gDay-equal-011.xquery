declare function local:gDay ($gDay as xs:gDay, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gDay
};

exists(local:gDay(xs:gDay("---31"), fn:true()) eq xs:gDay("---31"))
