declare variable $a := <a />;

declare function local:testSingleNodeIdentity ($node as node()) {
  $node is $node
};

declare function local:testDoubleNodeIdentity ($a as node(), $b as node()) {
  $a is $b
};

local:testSingleNodeIdentity(<a />),
local:testDoubleNodeIdentity(<a />, <b />),
local:testDoubleNodeIdentity($a, $a)
