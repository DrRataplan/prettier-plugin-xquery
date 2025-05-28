let $params :=
  <output:serialization-parameters
    xmlns:my-output="http://example.com/xslt-xquery-serialization"
    xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
    >
                <my-output:indent-spaces
      value="3" />
                <my-output:indent-spaces
      value="2" />
              </output:serialization-parameters>
return serialize(., $params)
