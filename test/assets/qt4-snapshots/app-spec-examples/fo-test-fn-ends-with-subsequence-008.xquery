let $p := parse-xml("<doc><chap><p/><p/></chap></doc>")//p[2]
return ends-with-subsequence($p/ancestor::node()[last()], $p/root(), op("is"))
