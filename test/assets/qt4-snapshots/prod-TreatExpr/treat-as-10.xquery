let $var := xs:dateTime("1999-05-31T13:20:00-05:00")
return fn:minutes-from-dateTime($var treat as xs:dateTime)
