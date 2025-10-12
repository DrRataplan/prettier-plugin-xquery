(
  every
    $s in
    tokenize(" ᚟, ᚁᚂᚃᚄᚅᚆᚇᚈᚉᚊᚋᚌᚍᚎᚏᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜᚝᚞᚟", ",") satisfies
    matches($s, "^(?:\p{IsOgham}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsOgham}+)$"))
  )
