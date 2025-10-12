fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      fn:substring-after("abcp1:anElement", "abc"),
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
