(
  every
    $s in
    tokenize(
      "ﬀﭏ,ﬀﬁﬂﬃﬄﬅﬆ﬇﬈﬉﬊﬋﬌﬍﬎﬏﬐﬑﬒ﬓﬔﬕﬖﬗ﬘﬙﬚﬛﬜יִﬞײַﬠﬡﬢﬣﬤﬥﬦﬧﬨ﬩שׁשׂשּׁשּׂאַאָאּבּגּדּהּוּזּ﬷טּיּךּכּלּ﬽מּ﬿נּסּ﭂ףּפּ﭅צּקּרּשּתּוֹבֿכֿפֿﭏ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsAlphabeticPresentationForms}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsAlphabeticPresentationForms}+)$"))
  )
