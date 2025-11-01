let $doc := parse-xml("<doc><a/></doc>")
return starts-with-subsequence(($doc, $doc), $doc, op("is"))
