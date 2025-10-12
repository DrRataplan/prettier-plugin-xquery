let $f := function ($x as xs:string) as xs:string { upper-case($x) }
let $n := function-name($f)
return <a
    arity="{ function-arity($f) }"
    eloc="{ empty(local-name-from-QName($n)) }"
    euri="{ empty(namespace-uri-from-QName($n)) }"
    loc="{ local-name-from-QName($n) }"
    uri="{ namespace-uri-from-QName($n) }" />
