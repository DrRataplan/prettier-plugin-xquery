let $params :=
  map {"method": "xml", "omit-xml-declaration": true(), "item-separator": "=="}
return serialize((1 to 4)!text {
      .
    }, $params)
