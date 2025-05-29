declare default element namespace "http://www.example.com";

let $seq := fn:in-scope-prefixes(<anElement>Some content</anElement>)
return (count($seq), $seq = ("xml", ""))
