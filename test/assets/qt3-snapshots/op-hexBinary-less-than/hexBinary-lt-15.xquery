for $i in
  (
    xs:hexBinary("aa"),
    xs:hexBinary("bb"),
    xs:hexBinary(""),
    xs:hexBinary("88"),
    xs:hexBinary("bbbb")
  )
order by $i
return string($i)
