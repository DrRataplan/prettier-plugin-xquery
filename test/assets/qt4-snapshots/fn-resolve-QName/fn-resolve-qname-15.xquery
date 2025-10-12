fn:string(
  fn:local-name-from-QName(
    fn:resolve-QName(
      fn:string-join(("p1:", "anElement"), ""),
      <anElement xmlns:p1="http://example.com/examples">Some content</anElement>
    )
  )
)
