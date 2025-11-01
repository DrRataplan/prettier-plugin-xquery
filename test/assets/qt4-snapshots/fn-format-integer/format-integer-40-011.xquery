every
  $r in
  (2 to 36) satisfies
  format-integer($r - 1, $r || "^x") =
    substring("0123456789abcdefghijklmnopqrstuvwxyz", $r, 1)
