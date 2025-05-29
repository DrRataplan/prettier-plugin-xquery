let $attr1 := attribute attr {
    "foo"
  }
return let $attr2 := attribute attr {
      "bar"
    }
  return <a>{
      $attr1, $attr2
    }</a>
