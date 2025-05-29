declare function local:test ($test as xs:integer) as xs:integer? {
  if ($test = 1) then (
    0
  ) else if ($test = 2) then (
    9
  ) else if ($test = 3) then (
    13
  ) else if ($test = 4) then (
    16
  ) else (
  )
};

fn:codepoints-to-string(local:test(2) to 32)
