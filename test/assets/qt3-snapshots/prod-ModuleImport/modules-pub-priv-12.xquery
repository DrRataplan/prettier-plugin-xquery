declare %private variable $i := 1;

declare function local:test () {
  $i + 1
};

<a>{
  local:test()
}</a>
