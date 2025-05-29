let $var := element anElement {
    "Element Content"
  }
return fn:root($var) is fn:root($var)
