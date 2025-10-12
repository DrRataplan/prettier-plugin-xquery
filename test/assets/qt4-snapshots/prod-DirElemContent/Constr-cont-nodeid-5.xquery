for $x in <a>text</a>, $y in <elem>{ $x/text() }</elem>
return exactly-one($y/text()) is exactly-one($x/text())
