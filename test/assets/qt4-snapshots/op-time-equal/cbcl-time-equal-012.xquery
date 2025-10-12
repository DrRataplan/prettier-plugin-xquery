declare function local:time ($time as xs:time, $null as xs:boolean) {
  if ($null) then (
  ) else
    $time
};

local:time(xs:time("23:58:00"), fn:false()) eq xs:time("23:58:00")
