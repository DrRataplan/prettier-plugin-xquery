(
  every
    $s in
    tokenize(
      "ఀ౿,ఀఁంఃఄఅఆఇఈఉఊఋఌ఍ఎఏఐ఑ఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధన఩పఫబభమయరఱలళఴవశషసహ఺఻఼ఽాిీుూృౄ౅ెేై౉ొోౌ్౎౏౐౑౒౓౔ౕౖ౗ౘౙౚ౛౜ౝ౞౟ౠౡౢౣ౤౥౦౧౨౩౪౫౬౭౮౯౰౱౲౳౴౵౶౷౸౹౺౻౼౽౾౿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsTelugu}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsTelugu}+)$"))
  )
