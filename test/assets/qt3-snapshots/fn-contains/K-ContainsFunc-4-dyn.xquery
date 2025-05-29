declare variable $zls external;

contains(
  "another string",
  "a string",
  $zls || "http://www.example.com/COLLATION/NOT/SUPPORTED"
)
