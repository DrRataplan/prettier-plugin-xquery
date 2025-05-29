let $var := element anElement {
    "Element Content"
  }
return fn:count(fn:namespace-uri(fn:root($var)))
