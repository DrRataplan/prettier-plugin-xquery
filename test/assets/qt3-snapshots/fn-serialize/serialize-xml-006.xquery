let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
  xmlns:p="http://www.saxonica.com"
>
  <output:method value="xml" />
  <output:indent value="yes" />
  <output:cdata-section-elements value="p:a p:b c" />
</output:serialization-parameters>
return serialize(., $params)
