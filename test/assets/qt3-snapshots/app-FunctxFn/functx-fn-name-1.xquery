declare namespace pre2 = "http://datypic.com/pre";
declare namespace unpre2 = "http://datypic.com/unpre";

let $in-xml :=
  <noNamespace> <pre:prefixed xmlns="http://datypic.com/unpre" xmlns:pre="http://datypic.com/pre"> <unprefixed pre:prefAttr="a" noNSAttr="b">123</unprefixed> </pre:prefixed> </noNamespace>
return (name($in-xml))
