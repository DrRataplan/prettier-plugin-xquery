for $i in 1 to 60
return format-dateTime($t + xs:dayTimeDuration("PT61S") * $i, "[mA].[sa]")
