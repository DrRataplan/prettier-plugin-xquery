(
  every
    $s in
    tokenize(
      "ঀ৿,ঀঁংঃ঄অআইঈউঊঋঌ঍঎এঐ঑঒ওঔকখগঘঙচছজঝঞটঠডঢণতথদধন঩পফবভমযর঱ল঳঴঵শষসহ঺঻়ঽািীুূৃৄ৅৆েৈ৉৊োৌ্ৎ৏৐৑৒৓৔৕৖ৗ৘৙৚৛ড়ঢ়৞য়ৠৡৢৣ৤৥০১২৩৪৫৬৭৮৯ৰৱ৲৳৴৵৶৷৸৹৺৻ৼ৽৾৿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsBengali}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsBengali}+)$"))
  )
