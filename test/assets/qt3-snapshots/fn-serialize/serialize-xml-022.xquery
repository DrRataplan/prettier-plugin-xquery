let $params := <output:serialization-parameters
  xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
>
  <output:use-character-maps>
    <output:character-map character="$" map-string="£" />
    <output:character-mapping character="%" map-string="£" />
  </output:use-character-maps>
</output:serialization-parameters>
return serialize(., $params)
