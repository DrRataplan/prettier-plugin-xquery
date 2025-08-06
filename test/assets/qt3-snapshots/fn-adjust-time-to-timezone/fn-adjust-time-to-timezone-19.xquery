let $tz := xs:dayTimeDuration("PT10H")
return fn:adjust-time-to-timezone(xs:time("10:00:00Z"), $tz) -
  xs:time("09:00:00Z")
