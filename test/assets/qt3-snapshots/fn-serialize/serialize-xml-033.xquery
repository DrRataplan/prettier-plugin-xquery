let $params :=
  <output:serialization-parameters
    xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
    >
                <output:method
      value="xml" />
                <output:item-separator
      value="|" />
              </output:serialization-parameters>
return serialize(1 to 10, $params)
