declare namespace pre2 = "http://datypic.com/pre";
declare namespace unpre = "http://datypic.com/unpre";

let $in-xml := <noNamespace>
  <pre:prefixed
    xmlns="http://datypic.com/unpre"
    xmlns:pre="http://datypic.com/pre"
  ><unprefixed noNSAttr="b" pre:prefAttr="a">123</unprefixed></pre:prefixed>
</noNamespace>
return (prefix-from-QName(node-name($in-xml)))
