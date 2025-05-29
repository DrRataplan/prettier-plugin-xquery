declare variable $global := node();

declare function local:function () {
  exists($global)
};

local:function()
