fn:string(
  fn:namespace-uri-from-QName(
    fn:resolve-QName(
      "anElement",
      <anElement xmlns="http://example.com/examples">Some content</anElement>
    )
  )
)
