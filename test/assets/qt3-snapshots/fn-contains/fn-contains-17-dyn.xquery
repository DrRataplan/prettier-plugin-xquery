declare variable $zls external;

fn:contains(
  $zls || "banana",
  $zls || "ana",
  "http://www.w3.org/2013/collation/UCA?lang=en"
)
