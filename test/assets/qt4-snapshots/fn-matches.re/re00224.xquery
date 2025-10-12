(
  every
    $s in
    tokenize(
      "֐׿,֐ְֱֲֳִֵֶַָֹֺֻּֽ֑֖֛֢֣֤֥֦֧֪֚֭֮֒֓֔֕֗֘֙֜֝֞֟֠֡֨֩֫֬֯־ֿ׀ׁׂ׃ׅׄ׆ׇ׈׉׊׋׌׍׎׏אבגדהוזחטיךכלםמןנסעףפץצקרשת׫׬׭׮ׯװױײ׳״׵׶׷׸׹׺׻׼׽׾׿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsHebrew}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsHebrew}+)$"))
  )
