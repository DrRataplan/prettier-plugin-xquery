array:index-of(
  [
    parse-xml("<doc><a y='1' x='2'>44</a></doc>"),
    parse-xml("<doc><a y='1' x='2' z='3'>44</a></doc>")
  ],
  parse-xml("<doc><a x='2' y='1'>44</a></doc>")
)
