declare function local:myFunc () {
  for $i at $p in (1, 2, 3)
  return position()
};

local:myFunc()
