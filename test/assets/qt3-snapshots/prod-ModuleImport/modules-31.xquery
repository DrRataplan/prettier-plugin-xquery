import module namespace impl = "http://example.com/impl" at "http://example.com/impl1.xqm";
import module namespace other = "http://example.com/other" at "http://example.com/other.xqm";

document {
  <result>
            <impl>{
      impl:f1("hello")
    }</impl>
            <other>{
      other:do("hello", "world")
    }</other>
            <var>{
      $impl:v1
    }</var>
          </result>
}
