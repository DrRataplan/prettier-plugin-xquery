declare default element namespace "http://www.example.com";

let $seq := fn:in-scope-prefixes(element anElement {
      "Some content"
    })
return (count($seq), $seq = ("xml", ""))
