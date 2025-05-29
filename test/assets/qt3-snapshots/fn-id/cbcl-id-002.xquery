let $doc := document {
    <root />
  }
return fn:empty(fn:id((), $doc))
