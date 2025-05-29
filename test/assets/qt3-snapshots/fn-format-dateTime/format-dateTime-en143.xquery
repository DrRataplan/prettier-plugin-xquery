for $i in 0 to 1
return let $t := $b + xs:dayTimeDuration("PT12H") * $i
  return translate(format-dateTime($t, "[h]~[m][P]", "en", (), ()), ".- ", "")
