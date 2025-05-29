declare %public function local:inc ($i as xs:integer) {
  $i + 1
};

<a>{
  local:inc(1)
}</a>
