for $value in
  fn:duplicate-values(
    (
      xs:base64Binary("aGVsbG8NCg=="),
      xs:base64Binary("aGVsbG8NCg=="),
      xs:base64Binary("aGFsbG8NCg=="),
      xs:base64Binary("aGVsbG8NCg=="),
      xs:base64Binary("aGkNCg==")
    )
  )
order by string($value)
return $value
