declare function local:gYearMonth (
  $gYearMonth as xs:gYearMonth,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $gYearMonth
};

exists(
  local:gYearMonth(xs:gYearMonth("1972-12"), fn:true()) eq
    xs:gYearMonth("1972-12")
)
