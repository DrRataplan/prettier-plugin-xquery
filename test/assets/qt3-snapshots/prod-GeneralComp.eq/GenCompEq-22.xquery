declare namespace z = "http://example.com/z";

declare variable $p external;

$p = (<xs:element/>, <z:local/>, <fn:function/>)!node-name(.)
