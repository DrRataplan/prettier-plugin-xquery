declare namespace ns1 = "http://www.example.org/ns1";
declare namespace ns2 = "http://www.example.org/ns2";

let $element as element(*) := <ns1:foo/>
return count($element/self::ns2:*)
