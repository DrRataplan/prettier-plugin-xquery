(
  every
    $s in
    tokenize("㆐㆟,㆐㆑㆒㆓㆔㆕㆖㆗㆘㆙㆚㆛㆜㆝㆞㆟", ",") satisfies
    matches($s, "^(?:\p{IsKanbun}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsKanbun}+)$"))
  )
