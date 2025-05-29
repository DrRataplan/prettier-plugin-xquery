import module namespace defs = "http://www.w3.org/TestModules/module-pub-priv";

declare function local:test () {
  $defs:two
};

<a>{
  local:test()
}</a>
