subsequence(
  (1 to 100)[. mod 2 = 0],
  1,
  xs:double(string-join(("I", "N", "F")[position() mod 2 >= 0], ""))
)
