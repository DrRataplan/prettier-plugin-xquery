let $i := <e xmlns:p="http://example.com" p:anAttribute="attrValue" />
return <a>{
      $i/@*
    }</a>
