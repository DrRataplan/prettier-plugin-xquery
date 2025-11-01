let $in := parse-xml('<K id="1">1</K>')
return $in//*[exists(@n1 >= -1)]
