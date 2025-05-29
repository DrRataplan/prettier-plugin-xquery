let $x := <a><b/><c/><d/></a>
return count(($x/(node() except b) | $x/(node() except b)))
