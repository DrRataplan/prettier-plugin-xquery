for $x in <a>text</a>, $y in element elem { $x/text() }
return exactly-one($y/text()) is exactly-one($x/text())
