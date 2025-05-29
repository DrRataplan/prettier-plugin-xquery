(
  every
    $s in
    tokenize(
      "຀໿,຀ກຂ຃ຄ຅ຆງຈຉຊ຋ຌຍຎຏຐຑຒຓດຕຖທຘນບປຜຝພຟຠມຢຣ຤ລ຦ວຨຩສຫຬອຮຯະັາຳິີຶື຺ຸູົຼຽ຾຿ເແໂໃໄ໅ໆ໇່້໊໋໌ໍ໎໏໐໑໒໓໔໕໖໗໘໙໚໛ໜໝໞໟ໠໡໢໣໤໥໦໧໨໩໪໫໬໭໮໯໰໱໲໳໴໵໶໷໸໹໺໻໼໽໾໿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsLao}+)$")
) and
  (every $s in tokenize("", ",") satisfies not(matches($s, "^(?:\p{IsLao}+)$")))
