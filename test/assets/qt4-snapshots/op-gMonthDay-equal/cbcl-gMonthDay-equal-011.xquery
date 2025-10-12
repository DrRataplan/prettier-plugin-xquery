declare function local:gMonthDay (
  $gMonthDay as xs:gMonthDay,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $gMonthDay
};

exists(
  local:gMonthDay(xs:gMonthDay("--12-31"), fn:true()) eq xs:gMonthDay("--12-31")
)
