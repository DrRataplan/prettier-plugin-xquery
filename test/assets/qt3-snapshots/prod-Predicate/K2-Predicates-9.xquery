declare function local:foo ($arg as item()) {
  string($arg/@arg)
};

local:foo(<e arg="result" />)
