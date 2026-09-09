declare namespace z = "http://example.com/z";

declare variable $p external := xs:untypedAtomic("z:local");

$p = (<xs:element />, <z:local />, <fn:function />)!node-name(.)
