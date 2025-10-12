fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      fn:substring("abcp1:anElement", 4),
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
