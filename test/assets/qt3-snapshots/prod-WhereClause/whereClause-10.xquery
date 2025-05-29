let $var := 1
where some $x in (1, 2) satisfies fn:string($var) = "1"
return fn:string($var)
