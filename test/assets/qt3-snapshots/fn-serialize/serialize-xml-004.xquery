let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
><output:indent value="yes" /></output:serialization-parameters>
return serialize(., $params)
