let $var := (fn:false())
where fn:not($var or fn:false())
return $var or fn:false()
