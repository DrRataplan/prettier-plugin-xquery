let $node := <a><b /><c /></a>
return not(exactly-one($node/b[1]) is exactly-one($node/c[1]))
