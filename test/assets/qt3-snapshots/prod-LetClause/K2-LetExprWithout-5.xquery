declare function local:myFunc ($arg as node()) {
  let $v := aNameTest
  return $arg/$v
};

local:myFunc(<e />)
