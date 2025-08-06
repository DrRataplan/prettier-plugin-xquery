let $tz := xs:dayTimeDuration("PT10H")
return fn:adjust-date-to-timezone(xs:date("2004-03-07Z"), $tz) -
  xs:date("2001-03-07Z")
