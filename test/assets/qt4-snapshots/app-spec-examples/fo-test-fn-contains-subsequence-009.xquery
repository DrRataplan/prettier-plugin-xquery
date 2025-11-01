let $chap := parse-xml("<doc><chap><h1/><p/><p/><footnote/></chap></doc>")//chap
return contains-subsequence($chap!child::*, $chap!child::p, op("is"))
