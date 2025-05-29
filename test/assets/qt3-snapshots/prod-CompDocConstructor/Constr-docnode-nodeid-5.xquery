for $x in <a>text</a>, $y in document {
    $x/text()
  }
return exactly-one($y/text()) is exactly-one($x/text())
