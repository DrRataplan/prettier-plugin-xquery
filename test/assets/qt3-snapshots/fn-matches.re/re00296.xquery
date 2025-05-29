(
  every
    $s in
    tokenize(
      "＀￯,＀！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～｟｠｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟﾠﾡﾢﾣﾤﾥﾦﾧﾨﾩﾪﾫﾬﾭﾮﾯﾰﾱﾲﾳﾴﾵﾶﾷﾸﾹﾺﾻﾼﾽﾾ﾿￀￁ￂￃￄￅￆￇ￈￉ￊￋￌￍￎￏ￐￑ￒￓￔￕￖￗ￘￙ￚￛￜ￝￞￟￠￡￢￣￤￥￦￧￨￩￪￫￬￭￮￯",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsHalfwidthandFullwidthForms}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsHalfwidthandFullwidthForms}+)$"))
  )
