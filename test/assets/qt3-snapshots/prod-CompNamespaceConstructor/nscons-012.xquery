declare variable $p1 := "http://example.com/one";

declare variable $p2 := "http://example.com/two";

declare function local:f ($ns as namespace-node()) as element() {
  <namespace name="{
    name($ns)
  }" local-name="{
    local-name($ns)
  }" 
                namespace-uri="{
    namespace-uri($ns)
  }" string-value="{
    string($ns)
  }" typed-value="{
    data($ns)
  }" 
                is-untyped="{
    data($ns) instance of xs:untypedAtomic
  }" parent-exists="{
    exists($ns/..)
  }" 
                is-namespace="{
    $ns instance of namespace-node()
  }" 
                is-node="{
    $ns instance of node()
  }" is-item="{
    $ns instance of item()
  }" 
                same-as-self="{
    $ns is $ns
  }"/>
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
