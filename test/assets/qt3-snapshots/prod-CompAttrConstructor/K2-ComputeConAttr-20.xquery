declare function local:myFunc ($recurse as xs:integer) as item() {
  <nested> {
    if ($recurse = 0) then (
    ) else
      local:myFunc($recurse - 1)
  } </nested>
};

<b> {
  local:myFunc(3)
} {
  attribute name {
    "content"
  }
} </b>
