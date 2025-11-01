let $data := parse-xml('<a xml:space="preserve"><b>  </b><b>       </b></a>')
return deep-equal($data//b[1], $data//b[2], map {"whitespace": "strip"})
