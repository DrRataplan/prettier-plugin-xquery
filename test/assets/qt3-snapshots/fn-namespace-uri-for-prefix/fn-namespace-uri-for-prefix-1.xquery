let $var := <anElement
  xmlns:p1="http://www.example.com/examples"
>some context</anElement>
return string(fn:namespace-uri-for-prefix("p1", $var))
