declare %public function local:inc ($i as xs:integer) {
  $i + 1
};

declare variable $test := local:inc(1);

<a>{
    $test
  }</a>
