fn:string(
  fn:namespace-uri-from-QName(
    fn:resolve-QName(
      "P1:name",
      <anElement
        xmlns:P1="http://someothernamespace.com/examples"
        xmlns:p1="http://example.com/examples"
        >Some content</anElement>
    )
  )
)
