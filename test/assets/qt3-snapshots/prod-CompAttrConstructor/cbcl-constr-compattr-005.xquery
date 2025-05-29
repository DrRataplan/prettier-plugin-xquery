for $a in attribute {fn:QName("http://www.example.com/", "xml:foo")} {
    "bar"
  }
return name($a)
