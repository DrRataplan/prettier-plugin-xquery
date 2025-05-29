declare decimal-format exp-p exponent-separator = "%";

let $x := fn:format-number(12345.678, "9.9999%999", "exp-p")
return $x
