let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
><output:omit-xml-declaration value="yes" /></output:serialization-parameters>

return let $data := <a b="3" />

  return fn:serialize($data, $params)
