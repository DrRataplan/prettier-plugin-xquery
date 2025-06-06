let $tz-10 := xs:dayTimeDuration("-PT10H")

return fn:adjust-date-to-timezone(xs:date("2002-03-07"), $tz-10)
