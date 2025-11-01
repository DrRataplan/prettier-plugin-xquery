declare variable $uri-a external;

declare variable $uri-b external;

let $d := document { <test /> }
return (fn:put($d, $uri-a), fn:put($d, $uri-b))
