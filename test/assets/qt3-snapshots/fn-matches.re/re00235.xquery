(
  every
    $s in
    tokenize(
      "ಀ೿,ಀಁಂಃ಄ಅಆಇಈಉಊಋಌ಍ಎಏಐ಑ಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನ಩ಪಫಬಭಮಯರಱಲಳ಴ವಶಷಸಹ಺಻಼ಽಾಿೀುೂೃೄ೅ೆೇೈ೉ೊೋೌ್೎೏೐೑೒೓೔ೕೖ೗೘೙೚೛೜ೝೞ೟ೠೡೢೣ೤೥೦೧೨೩೪೫೬೭೮೯೰ೱೲೳ೴೵೶೷೸೹೺೻೼೽೾೿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsKannada}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsKannada}+)$"))
  )
