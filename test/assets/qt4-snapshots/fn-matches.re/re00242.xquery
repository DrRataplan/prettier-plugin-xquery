(
  every
    $s in
    tokenize(
      "Ⴀჿ,ႠႡႢႣႤႥႦႧႨႩႪႫႬႭႮႯႰႱႲႳႴႵႶႷႸႹႺႻႼႽႾႿჀჁჂჃჄჅ჆Ⴧ჈჉჊჋჌Ⴭ჎჏აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶჷჸჹჺ჻ჼჽჾჿ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsGeorgian}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsGeorgian}+)$"))
  )
