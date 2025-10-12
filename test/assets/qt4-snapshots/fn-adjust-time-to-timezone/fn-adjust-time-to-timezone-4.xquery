let $tz := xs:dayTimeDuration("-PT10H")
return fn:adjust-time-to-timezone(xs:time("10:00:00-07:00"), $tz)
