for $x in
  <parent3 xmlns:foo="http://www.example.com/parent3"><foo:child3 /></parent3>
return <new>{
    $x//*:child3
  }</new>
