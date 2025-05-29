for $value in
  fn:distinct-values(
    (
      xs:hexBinary("FFFF"),
      xs:hexBinary("FFFF"),
      xs:hexBinary("FFFE"),
      xs:hexBinary("FF")
    )
  )
order by string($value)
return $value
