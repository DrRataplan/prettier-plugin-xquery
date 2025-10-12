declare function local:gMonth ($gMonth as xs:gMonth, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gMonth
};

exists(local:gMonth(xs:gMonth("--12"), fn:true()) ne xs:gMonth("--12"))
