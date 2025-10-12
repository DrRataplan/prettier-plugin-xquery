for $a in
  attribute {fn:QName("http://www.w3.org/XML/1998/namespace", "sgml:foo")} {
    "bar"
  }
return name($a)
