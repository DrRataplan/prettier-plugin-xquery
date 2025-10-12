for $i in
  (
    xs:base64Binary("qg=="),
    xs:base64Binary("uw=="),
    xs:base64Binary(""),
    xs:base64Binary("iA=="),
    xs:base64Binary("u7s=")
  )
order by $i descending
return string($i)
