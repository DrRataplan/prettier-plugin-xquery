let $in := <r>
  <e xmlns="http://example.com/&lt;&gt;&quot;&apos;""" />
  <e xmlns='http://example.com/&lt;&gt;&quot;&apos;''' />
  <p:e xmlns:p="http://example.com/&lt;&gt;&quot;&apos;""" />
  <p:e xmlns:p='http://example.com/&lt;&gt;&quot;&apos;''' />
</r>
return <r>
    {
      for $n in $in/*/namespace-uri(.)
      return <e ns="{ $n }" />
    }
  </r>
