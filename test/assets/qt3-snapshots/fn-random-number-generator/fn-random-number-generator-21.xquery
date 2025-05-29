declare namespace r = "http://example.com/random/";

declare %public function r:random-sequence (
  $length as xs:integer
) as xs:double* {
  r:random-sequence($length, fn:random-number-generator())
};

declare %private function r:random-sequence (
  $length as xs:integer,
  $G as map(xs:string, item())
) {
  if ($length eq 0) then (
  ) else (
    $G?number, r:random-sequence($length - 1, $G?next())
  )
};

r:random-sequence(200)
