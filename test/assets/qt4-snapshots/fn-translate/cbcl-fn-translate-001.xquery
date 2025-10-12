boolean(
  translate(
    string-join(
      for $x in 1 to 10
      return "blah",
      "-"
    ),
    exactly-one(("--", "==")[position() mod 2 = 0]),
    "__"
  )
)
