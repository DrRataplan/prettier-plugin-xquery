let $result :=
  xml-to-json(
    <map xmlns="http://www.w3.org/2005/xpath-functions">
      <number key="a">1</number>
      <number key="b">2</number>
    </map>,
    map {"indent": false(), "outdent": true()}
  )
return normalize-space($result) eq $result
