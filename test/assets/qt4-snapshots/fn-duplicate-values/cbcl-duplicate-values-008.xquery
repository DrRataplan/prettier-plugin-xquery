for $value in
  fn:duplicate-values(
    (
      xs:hexBinary("FFFF"),
      xs:hexBinary("FFFF"),
      xs:hexBinary("FFFE"),
      xs:hexBinary("FF")
    )
  )
order by string($value)
return $value
