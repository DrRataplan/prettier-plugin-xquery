import module namespace impl = "http://example.com/impl" at "http://example.com/impl1.xqm", "http://example.com/impl2.xqm";

document {
  <result>
    <impl>{ impl:f1("hello") }</impl>
    <other>{ impl:f1("hello", "world") }</other>
  </result>
}
