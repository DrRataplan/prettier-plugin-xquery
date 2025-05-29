declare variable $s := [["A", "DT"], ["bride", "NN"], [",", ","], ["you",
"PRP"], ["know", "VBP"], [",", ","], ["must", "MD"], ["appear", "VB"], ["like",
"IN"], ["a", "DT"], ["bride", "NN"], [",", ","], ["but", "CC"], ["my", "PRP$"],
["natural", "JJ"], ["taste", "NN"], ["is", "VBZ"], ["all", "DT"], ["for", "IN"],
["simplicity", "NN"], [";", ":"], ["a", "DT"], ["simple", "JJ"], ["style",
"NN"], ["of", "IN"], ["dress", "NN"], ["is", "VBZ"], ["so", "RB"],
["infinitely", "RB"], ["preferable", "JJ"], ["to", "TO"], ["finery", "VB"],
[".", "."]];

declare function local:filter (
  $s as item()*,
  $p as function (item()) as xs:boolean
) {
  array{
    $s[$p(.)]
  }, array{
    $s[not($p(.))]
  }
};

let $f := function ($a) {
    starts-with($a(2), "VB")
  }
return local:filter($s?*, $f)
