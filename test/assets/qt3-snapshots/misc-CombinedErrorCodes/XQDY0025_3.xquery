declare namespace prefix = "http://www/w3.org/";

let $attr1 := attribute attr { "foo" }
return let $attr2 := attribute attr { "bar" }
  return <prefix:a>{ $attr1, $attr2 }</prefix:a>
