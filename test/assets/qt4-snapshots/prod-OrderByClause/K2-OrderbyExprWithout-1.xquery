declare base-uri "http://www.w3.org/2005/xpath-functions/";

let $i as xs:integer* := (1, 2, 3)
order by 1 collation "collation/codepoint"
return $i
