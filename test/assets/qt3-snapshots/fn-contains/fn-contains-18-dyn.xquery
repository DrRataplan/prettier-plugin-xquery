declare variable $zls external;

fn:contains(
  "banana",
  "bananas",
  $zls || "http://www.w3.org/2013/collation/UCA?lang=en"
)
