let $i := (xs:hexBinary("FF"), xs:time("03:03:03Z"), xs:hexBinary("FF"))
stable order by $i[1]
return $i
