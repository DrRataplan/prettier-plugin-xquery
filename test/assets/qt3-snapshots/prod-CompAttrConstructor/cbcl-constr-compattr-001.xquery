for $a in
  attribute {fn:QName("http://www.w3.org/2000/xmlns/", "namespace:foo")} {
    "bar"
  }
return name($a)
