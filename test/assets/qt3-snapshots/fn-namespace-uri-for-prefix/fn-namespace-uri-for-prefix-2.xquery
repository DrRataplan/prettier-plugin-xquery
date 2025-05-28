let $var :=
  <anElement xmlns:p1="http://www.example.com/examples">some context</anElement>
return fn:count(fn:namespace-uri-for-prefix("p2", $var))
