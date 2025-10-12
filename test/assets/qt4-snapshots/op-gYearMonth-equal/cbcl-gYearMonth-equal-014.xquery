declare function local:gYearMonth (
  $gYearMonth as xs:gYearMonth,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $gYearMonth
};

local:gYearMonth(xs:gYearMonth("1972-12"), fn:false()) ne
  xs:gYearMonth("1972-12")
