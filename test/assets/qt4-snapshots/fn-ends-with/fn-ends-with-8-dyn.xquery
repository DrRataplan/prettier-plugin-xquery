declare variable $zls external;

declare variable $empty external;

fn:ends-with(concat("AAAAABBBBBCCCCC", $zls), concat("BBBBB", $zls))
