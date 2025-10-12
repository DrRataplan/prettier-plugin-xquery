declare function local:date ($date as xs:date, $null as xs:boolean) {
  if ($null) then (
  ) else
    $date
};

exists(local:date(xs:date("1972-12-15"), fn:true()) eq xs:date("1972-12-15"))
