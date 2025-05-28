let $params :=
  <output:serialization-parameters-wrong
    xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
    >
                <output:indent
      value="yes" />
              </output:serialization-parameters-wrong>
return serialize(., $params)
