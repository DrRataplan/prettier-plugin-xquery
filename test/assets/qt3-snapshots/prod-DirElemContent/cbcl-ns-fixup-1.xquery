let $x := <ns:foo xmlns:ns="http://www.w3.org/foo" ns:attr="foo" />
return let $y := <ns:foo xmlns:ns="http://www.w3.org/bar" ns:attr="bar" />
  return let $z := <root> {
          $x/@*, $y/@*
        } </root>
    return count(distinct-values(in-scope-prefixes($z)))
