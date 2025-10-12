fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      fn:substring-before("p1:anElementabc", "abc"),
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
