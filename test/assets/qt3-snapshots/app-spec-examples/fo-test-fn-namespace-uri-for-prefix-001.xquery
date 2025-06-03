let $e :=
  <z:a xmlns="http://example.org/one" xmlns:z="http://example.org/two">
    <b xmlns="" />
  </z:a>
return fn:namespace-uri-for-prefix("z", $e)
