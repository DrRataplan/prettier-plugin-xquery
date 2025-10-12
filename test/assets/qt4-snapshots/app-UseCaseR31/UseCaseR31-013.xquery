declare variable $s := [
  ["A", "DT"],
  ["bride", "NN"],
  [",", ","],
  ["you", "PRP"],
  ["know", "VBP"],
  [",", ","],
  ["must", "MD"],
  ["appear", "VB"],
  ["like", "IN"],
  ["a", "DT"],
  ["bride", "NN"],
  [",", ","],
  ["but", "CC"],
  ["my", "PRP$"],
  ["natural", "JJ"],
  ["taste", "NN"],
  ["is", "VBZ"],
  ["all", "DT"],
  ["for", "IN"],
  ["simplicity", "NN"],
  [";", ":"],
  ["a", "DT"],
  ["simple", "JJ"],
  ["style", "NN"],
  ["of", "IN"],
  ["dress", "NN"],
  ["is", "VBZ"],
  ["so", "RB"],
  ["infinitely", "RB"],
  ["preferable", "JJ"],
  ["to", "TO"],
  ["finery", "VB"],
  [".", "."]
];

<s>
  {
    for $w in $s?*
    return <w pos="{ $w(2) }">{ $w(1) }</w>
  }
</s>
