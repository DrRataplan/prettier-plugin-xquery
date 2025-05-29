declare copy-namespaces preserve ,  inherit;

declare variable $element1 := <element1
  xmlns:namespace1="http://www.namespace1.com" />;

declare variable $element2 := <element2
  xmlns:namespace2="http://www.namespace2.com"
  >{
  $element1
}</element2>;

declare variable $element3 := <element3
  xmlns:namespace3="http://www.namespace3.com"
  >{
  $element2
}</element3>;

for $var in (in-scope-prefixes($element3/element2))
order by exactly-one($var) ascending
return $var
