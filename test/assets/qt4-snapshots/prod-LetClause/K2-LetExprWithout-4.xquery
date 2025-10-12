declare function local:myFunc ($arg as node()) {
  let $v := .
  return $arg/$v
};

local:myFunc(<e />)
