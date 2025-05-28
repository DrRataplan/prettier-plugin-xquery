declare namespace ns1 = "http://example.org";

let $var := <a attr1="abc1"><ns1:b attr2="abc2">context2</ns1:b></a>
return $var/child::ns1:b
