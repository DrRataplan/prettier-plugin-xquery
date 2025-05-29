<element xmlns:sgml="http://www.example.com/other"> {
  for $a in attribute {fn:QName("http://www.example.com/", "sgml:foo")} {}
  return concat(name($a), "=", namespace-uri($a))
} 
      	</element>
