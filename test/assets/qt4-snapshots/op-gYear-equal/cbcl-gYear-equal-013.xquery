declare function local:gYear ($gYear as xs:gYear, $null as xs:boolean) {
  if ($null) then (
  ) else
    $gYear
};

exists(local:gYear(xs:gYear("1972"), fn:true()) ne xs:gYear("1972"))
