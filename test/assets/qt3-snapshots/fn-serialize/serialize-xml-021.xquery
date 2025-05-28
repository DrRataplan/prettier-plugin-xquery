let $params :=
  <output:serialization-parameters
    xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization"
    >
                <output:use-character-maps>
                  <output:character-map
        character="$"
        exchange-rate="1.80"
        map-string="£" />
                </output:use-character-maps>
              </output:serialization-parameters>
return serialize(., $params)
