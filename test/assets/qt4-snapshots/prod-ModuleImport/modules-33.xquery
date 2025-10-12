import module namespace other = "http://example.com/other" at "http://example.com/other.xqm";

document {
  <result>
    <other>{ other:do("hello", "world") }</other>
    <transitive>
      {
        let $f1 := fn:function-lookup(
          fn:QName("http://example.com/impl", "f1"),
          2
        )
        return if (exists($f1)) then
            $f1("oh", "dear")
          else
            "***"
      }
    </transitive>
  </result>
}
