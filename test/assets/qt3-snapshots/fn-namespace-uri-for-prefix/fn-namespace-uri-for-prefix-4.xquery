declare default element namespace "http://www.example.com/defaultspace";

let $var :=
  <anElement xmlns:p1 = "http://www.example.com/examples">some context</anElement>
return fn:string(fn:namespace-uri-for-prefix((), $var))
