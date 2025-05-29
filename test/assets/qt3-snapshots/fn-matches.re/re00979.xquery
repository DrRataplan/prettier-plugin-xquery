(
  every
    $s in
    tokenize("̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇͈͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀́͂̓̈́͆͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗͛ͣͤͥͦͧͨͩͪͫͬͭͮͯ͘͜͟͢͝͞͠͡", ",") satisfies
    matches($s, "^(?:\p{IsCombiningDiacriticalMarks}+)$")
) and
  (
    every
      $s in
      tokenize("a", ",") satisfies
      not(matches($s, "^(?:\p{IsCombiningDiacriticalMarks}+)$"))
  )
