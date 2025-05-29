declare function local:dateTime (
  $dateTime as xs:dateTime,
  $null as xs:boolean
) {
  if ($null) then (
  ) else
    $dateTime
};

local:dateTime(xs:dateTime("1972-12-15T12:00:00"), fn:false()) le
  xs:dateTime("1972-12-15T12:00:00")
