declare variable $p1 := "http://example.com/one";

declare variable $p2 := "http://example.com/two";

declare function local:f ($ns as namespace-node()) as element() {
  <namespace is-item="{
      $ns instance of item()
    }" is-namespace="{
      $ns instance of namespace-node()
    }" is-node="{
      $ns instance of node()
    }" is-untyped="{
      data($ns) instance of xs:untypedAtomic
    }" local-name="{
      local-name($ns)
    }" name="{
      name($ns)
    }" namespace-uri="{
      namespace-uri($ns)
    }" parent-exists="{
      exists($ns/..)
    }" same-as-self="{
      $ns is $ns
    }" string-value="{
      string($ns)
    }" typed-value="{
      data($ns)
    }" />
};

<out>{
  local:f(namespace p {
      "http://example.com/one"
    }), local:f(namespace {
      ""
    } {
      "http://example.com/two"
    })
}</out>
