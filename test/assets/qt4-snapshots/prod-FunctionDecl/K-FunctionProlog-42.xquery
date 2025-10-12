declare function local:myFunction ($local:arg) as item() {
  1, $local:arg
};

local:myFunction(()), local:myFunction(1)
