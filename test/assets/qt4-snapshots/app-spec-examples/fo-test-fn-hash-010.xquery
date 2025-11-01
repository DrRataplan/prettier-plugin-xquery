let $doc := <doc>abc</doc>
return hash(serialize($doc), "sha-1") => xs:base64Binary() => string()
