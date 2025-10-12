for $i in 0 to 23
return let $t := $b + xs:dayTimeDuration("PT1H") * $i
  return translate(format-dateTime($t, "[h]~[m][P]", "en", (), ()), ".- ", "")
