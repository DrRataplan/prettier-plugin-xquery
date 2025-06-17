declare namespace prefix = "http://www/w3.org/";

let $attr1 := attribute prefix:attr { "foo" }
return let $attr2 := attribute prefix:attr { "bar" }
  return <prefix:a>{ $attr1, $attr2 }</prefix:a>
