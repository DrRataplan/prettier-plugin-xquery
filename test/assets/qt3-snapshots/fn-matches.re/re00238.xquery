(
  every
    $s in
    tokenize(
      "฀๿,฀กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู฻฼฽฾฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛๜๝๞๟๠๡๢๣๤๥๦๧๨๩๪๫๬๭๮๯๰๱๲๳๴๵๶๷๸๹๺๻๼๽๾๿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsThai}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsThai}+)$"))
  )
