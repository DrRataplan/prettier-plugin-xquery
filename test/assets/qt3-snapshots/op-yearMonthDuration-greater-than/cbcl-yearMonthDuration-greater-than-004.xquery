declare function local:yearMonthDuration (
  $yearMonthDuration as xs:yearMonthDuration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $yearMonthDuration
};

local:yearMonthDuration(xs:yearMonthDuration("P0Y"), fn:false()) gt
  xs:yearMonthDuration("P0Y")
