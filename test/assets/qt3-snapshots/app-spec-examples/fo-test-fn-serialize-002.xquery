let $data := <a b="3"/>
return fn:serialize(
    $data,
    map {"method": "xml", "omit-xml-declaration": true()}
  )
