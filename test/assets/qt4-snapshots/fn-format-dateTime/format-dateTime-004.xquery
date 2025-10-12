for $i in 1 to 24
return format-dateTime($t + xs:dayTimeDuration("PT1H") * $i, "[h].[m]")
