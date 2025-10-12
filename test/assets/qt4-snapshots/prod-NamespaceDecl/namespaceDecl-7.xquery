declare namespace xx = "http://example.org";

let $i := <foo:bar xmlns:foo="http://example.org">
  <foo:bing> Lentils </foo:bing>
</foo:bar>
return $i/xx:bing
