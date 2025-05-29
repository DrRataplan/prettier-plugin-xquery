fn:string(
  fn:namespace-uri-from-QName(
    fn:resolve-QName(
      "P1:name",
      <anElement xmlns:p1="http://example.com/examples" xmlns:P1="http://someothernamespace.com/examples">Some content</anElement>
    )
  )
)
