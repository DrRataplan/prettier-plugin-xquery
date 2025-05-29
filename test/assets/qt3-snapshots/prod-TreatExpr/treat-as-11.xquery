let $var := xs:time("01:23:00+05:00")
return fn:hours-from-time($var treat as xs:time)
