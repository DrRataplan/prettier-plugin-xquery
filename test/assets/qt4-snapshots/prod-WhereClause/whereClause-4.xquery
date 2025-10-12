let $var := (fn:false())
where fn:not($var and fn:false())
return $var and fn:false()
