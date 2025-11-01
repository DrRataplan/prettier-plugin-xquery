let $doc := parse-xml("<doc><a/></doc>")
return contains-subsequence(($doc, $doc), $doc, op("is"))
