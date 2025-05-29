for $x in
  <parent1
    xmlns:foo="http://www.example.com/parent1" foo:attr1="attr1"
    ><child1 attr="child" /></parent1>
return <new>{
    $x//*:child1
  }</new>
