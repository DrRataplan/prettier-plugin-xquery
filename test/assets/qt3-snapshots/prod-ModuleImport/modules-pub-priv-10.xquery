declare %private function local:inc ($i as xs:integer) {
  $i + 1
};

declare function local:test () {
  local:inc(1)
};

<a>{
  local:test()
}</a>
