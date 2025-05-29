declare default decimal-format exponent-separator = "E";

let $x := fn:format-number(12345.678, "9.9999e999")
return $x
