let $params :=
  <output:serialization-parameters
                   xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization">
                <output:method value="xml"/>   
                <output:indent value="yes"/>
                <vendor:xindent value="yes" xmlns:vendor="http://vendor.example.com/"/>
              </output:serialization-parameters>
return serialize(., $params)
