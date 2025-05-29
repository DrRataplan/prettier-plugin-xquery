declare namespace pre = "http://datypic.com/pre";
declare namespace unpre = "http://datypic.com/unpre";

let $in-xml :=
  <noNamespace> <pre:prefixed xmlns="http://datypic.com/unpre" xmlns:pre="http://datypic.com/pre"> <unprefixed pre:prefAttr="a" noNSAttr="b">123</unprefixed> </pre:prefixed> </noNamespace>
return (
    local-name($in-xml),
    local-name($in-xml//pre:prefixed),
    local-name($in-xml//unpre:unprefixed),
    local-name($in-xml//@pre:prefAttr),
    local-name($in-xml//@noNSAttr)
  )
