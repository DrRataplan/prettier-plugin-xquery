declare variable $local:myVar := local:myFunc(3);

declare function local:myFunc ($local:myVar) {
  $local:myVar
};

local:myFunc(6)
