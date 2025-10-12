declare copy-namespaces preserve ,  inherit;

declare function local:rec-add ($level as xs:integer) as element() {
  if ($level > 0) then
    element {concat("e", $level)} {
      namespace { concat("pre", $level) } { concat("uri", $level) },
      local:rec-add($level - 1)
    }
  else
    element e0 {}
};

local:rec-add(2)/e1/e0
