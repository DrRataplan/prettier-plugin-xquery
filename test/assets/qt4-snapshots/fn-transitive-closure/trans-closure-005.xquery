let $data := parse-xml(
  '
            <doc>
                <person id="0"/>
                <person id="1" manager="0"/>
                <person id="2" manager="0"/>
                <person id="3" manager="2"/>
                <person id="4" manager="2"/>
                <person id="5" manager="1"/>
                <person id="6" manager="3"/>
                <person id="7" manager="6"/>
                <person id="8" manager="6"/>
            </doc>'
)
return transitive-closure(
    $data//person[@id = "2"],
    function ($p) { $data//person[@manager = $p/@id] }
  )/string(@id)
