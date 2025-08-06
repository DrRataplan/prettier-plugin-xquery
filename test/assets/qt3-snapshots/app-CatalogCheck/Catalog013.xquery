declare namespace fots = "http://www.w3.org/2010/09/qt-fots-catalog";

let $testsets := //fots:test-set/@file/doc(resolve-uri(., base-uri(..)))
return $testsets//fots:dependency[@type = "spec"][exists(
  tokenize(normalize-space(@value), " ")[not(
    . =
      (
        "XP20",
        "XP20+",
        "XP30",
        "XP30+",
        "XP31",
        "XP31+",
        "XQ10",
        "XQ10+",
        "XQ30",
        "XQ30+",
        "XQ31",
        "XQ31+",
        "XT30",
        "XT30+"
      )
  )]
)]/concat(../@name, " => ", @value)
