declare function local:time ($time as xs:time, $null as xs:boolean) {
  if ($null) then (
  ) else
    $time
};

exists(local:time(xs:time("23:58:00"), fn:true()) eq xs:time("23:58:00"))
