declare function local:gMonth ($gMonth as xs:gMonth, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gMonth
};

local:gMonth(xs:gMonth("--12"), fn:false()) eq xs:gMonth("--12")
