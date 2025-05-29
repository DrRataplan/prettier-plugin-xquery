let $var := xs:date("2000-01-01+05:00")
return fn:year-from-date($var treat as xs:date)
