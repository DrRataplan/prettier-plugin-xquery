let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
>
  <output:method value="xml" />
  <output:omit-xml-declaration value="no" />
  <output:version value="1.1" />
  <output:undeclare-prefixes value="no" />
</output:serialization-parameters>
return serialize(., $params)
