let $params :=
  <output:serialization-parameters
                   xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
                   xmlns:my-output="http://example.com/xslt-xquery-serialization">
                <output:indent value="yes"/>
                <my-output:indent-spaces value="2"/>
              </output:serialization-parameters>
return serialize(., $params)
