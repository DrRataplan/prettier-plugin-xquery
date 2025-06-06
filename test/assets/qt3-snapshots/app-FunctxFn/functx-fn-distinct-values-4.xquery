let $in-xml := <in-xml><a>3</a><b>5</b><b>3</b></in-xml>
return (
    distinct-values((xs:integer("1"), xs:decimal("1.0"), xs:float("1.0E0")))
  )
