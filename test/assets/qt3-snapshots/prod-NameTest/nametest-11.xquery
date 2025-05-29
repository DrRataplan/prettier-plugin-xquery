let $var := <a attr1="abc1"><b attr2="abc2">context2</b></a>
return fn:count(fn:namespace-uri(exactly-one($var/child::b)))
