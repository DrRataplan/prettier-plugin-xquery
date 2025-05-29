fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      "p1:name",
      <anElement xmlns:p1="http://example.com/examples" xmlns:P1="http://example.com/examples">Some content</anElement>
    )
  )
)
