let $params := map {QName("", "indent"): true()}
return contains(serialize(<e><f/></e>, $params), " ")
