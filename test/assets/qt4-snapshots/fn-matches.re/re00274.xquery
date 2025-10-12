(
  every
    $s in
    tokenize(
      "　〿,　、。〃〄々〆〇〈〉《》「」『』【】〒〓〔〕〖〗〘〙〚〛〜〝〞〟〠〡〢〣〤〥〦〧〨〩〪〭〮〯〫〬〰〱〲〳〴〵〶〷〸〹〺〻〼〽〾〿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsCJKSymbolsandPunctuation}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsCJKSymbolsandPunctuation}+)$"))
  )
