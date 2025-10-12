(
  every
    $s in
    tokenize(
      "஀௿,஀஁ஂஃ஄அஆஇஈஉஊ஋஌஍எஏஐ஑ஒஓஔக஖஗஘ஙச஛ஜ஝ஞட஠஡஢ணத஥஦஧நனப஫஬஭மயரறலளழவஶஷஸஹ஺஻஼஽ாிீுூ௃௄௅ெேை௉ொோௌ்௎௏ௐ௑௒௓௔௕௖ௗ௘௙௚௛௜௝௞௟௠௡௢௣௤௥௦௧௨௩௪௫௬௭௮௯௰௱௲௳௴௵௶௷௸௹௺௻௼௽௾௿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsTamil}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsTamil}+)$"))
  )
