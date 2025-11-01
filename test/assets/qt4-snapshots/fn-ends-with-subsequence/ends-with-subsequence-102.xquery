let $doc := parse-xml("<doc><a/></doc>")
return ends-with-subsequence(($doc, $doc), $doc, op("is"))
