for $i in 1 to 48, $d in $t + xs:dayTimeDuration("P3D") * $i
return concat("[", $d, ":", format-date($d, "[w]", (), "ISO", ()), "]")
