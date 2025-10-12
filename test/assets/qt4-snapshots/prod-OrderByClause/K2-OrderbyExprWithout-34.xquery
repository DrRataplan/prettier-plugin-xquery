let $i := (xs:hexBinary("FF"), xs:hexBinary("FF"))
order by $i[1]
return $i
