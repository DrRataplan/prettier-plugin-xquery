fn:string(
  fn:namespace-uri-from-QName(
    fn:resolve-QName(
      xs:string("p1:anElement"),
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
