(every $s in tokenize("", ",") satisfies matches($s, "^(?:\W)$")) and
  (
    every
      $s in
      tokenize(
        "A,𝞨,a,a,𝟉,ǅ,ǅ,ῼ,ʰ,ʰ,ﾟ,א,א,𪘀,ً,𝆭,ः,𝅲,ः,𝅲,⃝,⃝,⃢,０,𝟿,𐍊,𐍊,〥,²,²,𐌣,⁄,￢,₠,₠,￦,゛,゛,￣,㆐,㆐,𝇝",
        ","
      ) satisfies
      not(matches($s, "^(?:\W)$"))
  )
