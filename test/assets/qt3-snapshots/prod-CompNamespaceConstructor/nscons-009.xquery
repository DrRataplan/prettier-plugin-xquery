declare variable $p1 := "http://example.com/one";

declare variable $p2 := "http://example.com/two";

<e> {
    namespace p {
      $p1
    }, namespace p {
      $p2
    }, element f {
      42
    }
  }</e>
