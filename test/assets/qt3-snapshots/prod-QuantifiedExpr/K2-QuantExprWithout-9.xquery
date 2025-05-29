let $firstSeq := (<a/>, <b/>, <e><c/></e>)
let $secondSeq := (<a attr=""/>, <b>text</b>, <e><c/></e>)
return some $i in $firstSeq satisfies $secondSeq[deep-equal(., $i)]
