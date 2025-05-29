declare variable $s := [["A", "DT"], ["bride", "NN"], [",", ","], ["you",
"PRP"], ["know", "VBP"], [",", ","], ["must", "MD"], ["appear", "VB"], ["like",
"IN"], ["a", "DT"], ["bride", "NN"], [",", ","], ["but", "CC"], ["my", "PRP$"],
["natural", "JJ"], ["taste", "NN"], ["is", "VBZ"], ["all", "DT"], ["for", "IN"],
["simplicity", "NN"], [";", ":"], ["a", "DT"], ["simple", "JJ"], ["style",
"NN"], ["of", "IN"], ["dress", "NN"], ["is", "VBZ"], ["so", "RB"],
["infinitely", "RB"], ["preferable", "JJ"], ["to", "TO"], ["finery", "VB"],
[".", "."]];

declare function local:words-only ($s) {
  for $w in $s
  where not($w(2) = (".", ",", ";", ":"))
  return $w(1)
};

for sliding window $w in local:words-only($s?*)
  start at $i when true()
  only end at $j when $j - $i eq 2
return array{
    $w
  }
