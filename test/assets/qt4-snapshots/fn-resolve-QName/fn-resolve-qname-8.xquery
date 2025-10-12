fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      "anElement",
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
