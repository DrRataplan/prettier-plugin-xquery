(
  every
    $s in
    tokenize(
      "઀૿,઀ઁંઃ઄અઆઇઈઉઊઋઌઍ઎એઐઑ઒ઓઔકખગઘઙચછજઝઞટઠડઢણતથદધન઩પફબભમયર઱લળ઴વશષસહ઺઻઼ઽાિીુૂૃૄૅ૆ેૈૉ૊ોૌ્૎૏ૐ૑૒૓૔૕૖૗૘૙૚૛૜૝૞૟ૠૡૢૣ૤૥૦૧૨૩૪૫૬૭૮૯૰૱૲૳૴૵૶૷૸ૹૺૻૼ૽૾૿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsGujarati}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsGujarati}+)$"))
  )
