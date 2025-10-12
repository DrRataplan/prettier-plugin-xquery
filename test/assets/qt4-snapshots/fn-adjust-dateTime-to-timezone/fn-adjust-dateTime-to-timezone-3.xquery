let $tz := xs:dayTimeDuration("-PT10H")
return fn:adjust-dateTime-to-timezone(xs:dateTime("2002-03-07T10:00:00"), $tz)
