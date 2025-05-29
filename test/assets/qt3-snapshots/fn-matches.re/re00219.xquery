(
  every
    $s in
    tokenize(
      "Āſ,ĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsLatinExtended-A}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsLatinExtended-A}+)$"))
  )
