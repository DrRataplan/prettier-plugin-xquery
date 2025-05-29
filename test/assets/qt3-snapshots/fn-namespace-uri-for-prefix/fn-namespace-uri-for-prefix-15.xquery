fn:string(
  fn:namespace-uri-for-prefix(
    fn:substring-after("abcp1", "abc"),
    <anElement xmlns:p1 = "http://www.example.com/examples">some context</anElement>
  )
)
