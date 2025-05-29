(
  every
    $s in
    tokenize(
      "ހ޿,ހށނރބޅކއވމފދތލގޏސޑޒޓޔޕޖޗޘޙޚޛޜޝޞޟޠޡޢޣޤޥަާިީުޫެޭޮޯްޱ޲޳޴޵޶޷޸޹޺޻޼޽޾޿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsThaana}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsThaana}+)$"))
  )
