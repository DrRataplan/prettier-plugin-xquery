let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
>
  <output:omit-xml-declaration value="no" />
  <output:standalone value=" omit " />
</output:serialization-parameters>
return serialize(., $params)
