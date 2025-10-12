(
  every
    $s in
    tokenize(
      "ഀൿ,ഀഁംഃഄഅആഇഈഉഊഋഌ഍എഏഐ഑ഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനഩപഫബഭമയരറലളഴവശഷസഹഺ഻഼ഽാിീുൂൃൄ൅െേൈ൉ൊോൌ്ൎ൏൐൑൒൓ൔൕൖൗ൘൙൚൛൜൝൞ൟൠൡൢൣ൤൥൦൧൨൩൪൫൬൭൮൯൰൱൲൳൴൵൶൷൸൹ൺൻർൽൾൿ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsMalayalam}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsMalayalam}+)$"))
  )
