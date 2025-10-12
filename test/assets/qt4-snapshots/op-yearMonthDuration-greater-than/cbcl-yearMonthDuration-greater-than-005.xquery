declare function local:yearMonthDuration (
  $yearMonthDuration as xs:yearMonthDuration,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $yearMonthDuration
};

exists(
  local:yearMonthDuration(xs:yearMonthDuration("P0Y"), fn:true()) le
    xs:yearMonthDuration("P0Y")
)
