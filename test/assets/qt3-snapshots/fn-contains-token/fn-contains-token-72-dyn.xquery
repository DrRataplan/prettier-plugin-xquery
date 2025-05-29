declare variable $zls external;

contains-token(
  "the quick brown fox",
  "quiCK",
  $zls ||
    "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
)
