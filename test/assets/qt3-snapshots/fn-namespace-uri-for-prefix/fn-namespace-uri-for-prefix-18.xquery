declare default element namespace "http://www.example.com/defaultnamespace";

let $var := element anElement {
    "some content"
  }
return fn:count(fn:namespace-uri-for-prefix("p1", $var))
