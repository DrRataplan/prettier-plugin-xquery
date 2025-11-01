let $p := parse-xml("<doc><chap><p/><p/></chap></doc>")//p[2]
return starts-with-subsequence($p/ancestor::*[1], $p/parent::*, op("is"))
