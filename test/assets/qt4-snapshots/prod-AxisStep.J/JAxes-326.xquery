let $xml := parse-xml("<doc><p id='a17'/><p id='a18'/></doc>")
let $array := [$xml//p[@id = "a17"], $xml//@id[. = "a18"]]
return $array/type(attribute(id)) => string()
