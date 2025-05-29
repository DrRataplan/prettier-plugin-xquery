boolean(
  resolve-uri(
    string-join(
      for $x in 1 to 10
      return "blah",
      "z"
    ),
    "http://localhost/"
  )
)
