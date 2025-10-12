fn:count(
  fn:namespace-uri-from-QName(
    fn:resolve-QName(
      "anElement",
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
