let $tz := xs:dayTimeDuration("PT10H")
return fn:adjust-date-to-timezone(xs:date("2002-03-07Z"), $tz) -
    xs:date("2006-03-07Z")
