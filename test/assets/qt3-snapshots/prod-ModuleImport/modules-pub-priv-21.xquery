import module namespace defs = "http://www.w3.org/TestModules/module-pub-priv";

declare variable $test := defs:g(42);

<a>{
    $test
  }</a>
