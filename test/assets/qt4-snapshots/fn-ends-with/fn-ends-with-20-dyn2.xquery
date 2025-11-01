declare variable $zls external;

fn:ends-with(
  "database" || $zls,
  "abaSe" || $zls,
  "http://www.w3.org/2013/collation/UCA?lang=en;strength=primary" || $zls
)
