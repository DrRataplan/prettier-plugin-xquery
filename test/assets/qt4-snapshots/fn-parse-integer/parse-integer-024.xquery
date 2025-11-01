parse-integer(
  "1" || char("\t") || "2" || char("\r") || 3 || char("\n") || "4  "
)
