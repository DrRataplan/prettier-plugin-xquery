for $x in
  <parent1 xmlns:foo="http://www.example.com/parent1" foo:attr1="attr1" />
return <new xmlns:foo="http://www.example.com">{
      $x//@*:attr1
    }</new>
