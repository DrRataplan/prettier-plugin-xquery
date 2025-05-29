declare function local:thrice ($x as xs:integer) as xs:integer {
  try {
    if (current-date() gt xs:date("2000-01-01")) then
      "three"
    else
      3
  } catch * {
    3
  }
};

local:thrice(3)
