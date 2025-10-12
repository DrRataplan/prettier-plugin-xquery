let $var := xs:boolean(fn:true())
return fn:not($var treat as xs:boolean)
