declare default element namespace "http://www.example.org/examples";

let $var := <a attr1="abc1"><b attr2="abc2">context2</b></a>
return fn:namespace-uri(exactly-one($var/child::b))
