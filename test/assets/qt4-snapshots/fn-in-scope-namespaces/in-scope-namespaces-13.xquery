let $seq := in-scope-namespaces(parse-xml("<a xmlns='p.ns'/>")//b)
return $seq("")
