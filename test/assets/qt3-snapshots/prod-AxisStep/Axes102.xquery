declare construction strip;

declare namespace ns1 = "http://www.example.org/ns1";
declare namespace ns2 = "http://www.example.org/ns2";

let $element as element(*, xs:untyped) := <e>test</e>
let $element as element(*, xs:untyped) := $element/self::*
return count($element)
