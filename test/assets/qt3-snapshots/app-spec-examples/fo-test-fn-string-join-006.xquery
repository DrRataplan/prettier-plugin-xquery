let $doc := <doc><chap><section xml:id="xyz" /></chap></doc>
return $doc//@xml:id!fn:string-join((node-name(), '="', ., '"'))
