declare variable $p1 := "http://example.com/one";

declare variable $p2 := "http://example.com/two";

declare variable $r := element {QName($p2, "p:e")} {
  namespace p {
    $p1
  }, element f {
    42
  }
};

<out>{
    exists($r[prefix-from-QName(node-name(.)) != "p"]),
    exists(in-scope-prefixes($r)[. = "p"])
  }</out>
