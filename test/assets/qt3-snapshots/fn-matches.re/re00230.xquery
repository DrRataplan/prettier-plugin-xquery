(
  every
    $s in
    tokenize(
      "਀੿,਀ਁਂਃ਄ਅਆਇਈਉਊ਋਌਍਎ਏਐ਑਒ਓਔਕਖਗਘਙਚਛਜਝਞਟਠਡਢਣਤਥਦਧਨ਩ਪਫਬਭਮਯਰ਱ਲਲ਼਴ਵਸ਼਷ਸਹ਺਻਼਽ਾਿੀੁੂ੃੄੅੆ੇੈ੉੊ੋੌ੍੎੏੐ੑ੒੓੔੕੖੗੘ਖ਼ਗ਼ਜ਼ੜ੝ਫ਼੟੠੡੢੣੤੥੦੧੨੩੪੫੬੭੮੯ੰੱੲੳੴੵ੶੷੸੹੺੻੼੽੾੿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsGurmukhi}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsGurmukhi}+)$"))
  )
