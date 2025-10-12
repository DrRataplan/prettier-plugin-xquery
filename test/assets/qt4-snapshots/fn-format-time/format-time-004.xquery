for $i in 1 to 24
return format-time($t + xs:dayTimeDuration("PT1H") * $i, "[h].[m]")
