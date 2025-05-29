declare construction strip;

declare namespace ns1 = "http://www.example.org/ns1";
declare namespace ns2 = "http://www.example.org/ns2";

let $element as element(*, xs:untyped) := <e a="value" />
let $attribute as attribute(*, xs:untypedAtomic)* := $element/attribute::*
return count($attribute)
