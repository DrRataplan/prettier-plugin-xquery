substring-after(
  format-number(xs:double("1.102030405060708090"), "0.00000000000000000‰"),
  format-number(xs:double("1.102030405060708090") * 1000, "0.00000000000000000")
) eq
  "‰"
