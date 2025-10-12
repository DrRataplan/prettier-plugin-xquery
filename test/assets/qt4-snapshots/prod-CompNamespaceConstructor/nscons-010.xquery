declare variable $p1 := "http://example.com/one";

declare variable $p2 := "http://example.com/two";

declare variable $r := <e>
  {
    namespace p { $p1 },
    attribute {QName($p2, "p:att")} { 93.7 },
    element f { 42 }
  }
</e>;

<out>
  {
    exists($r/@*:att[prefix-from-QName(node-name(.)) != "p"]),
    exists(in-scope-prefixes($r)[. = "p"])
  }
</out>
