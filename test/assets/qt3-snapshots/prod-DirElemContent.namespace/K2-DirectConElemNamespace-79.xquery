let $e := document {
    (
      <X1:L xmlns:X1="http://ns.example.com/URL1">1</X1:L>,
      <X2:L xmlns:X2="http://ns.example.com/URL2">2</X2:L>
    )
  }
return <outer
    xmlns:P="http://ns.example.com/URL1"
    > {
      let $outer as element(P:L) := $e/element(P:L)
      return <inner
          xmlns:P="http://ns.example.com/URL2"
          > {
            let $inner as element(P:L) := $outer
            return $inner
          } </inner>
    } </outer>
