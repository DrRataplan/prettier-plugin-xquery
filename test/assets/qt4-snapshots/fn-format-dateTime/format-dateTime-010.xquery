for $i in 1 to 48, $d in $t + xs:yearMonthDuration("P1M") * $i
return concat("[", $d, ": ", format-dateTime($d, "[F01]", (), "ISO", ()))
