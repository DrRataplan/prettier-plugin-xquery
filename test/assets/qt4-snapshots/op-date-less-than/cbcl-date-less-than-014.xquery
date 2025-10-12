declare function local:date ($date as xs:date, $null as xs:boolean) {
  if ($null) then (
  ) else
    $date
};

local:date(xs:date("1972-12-15"), fn:false()) ge xs:date("1972-12-15")
