(
  every
    $s in
    tokenize(
      "܀ݏ,܀܁܂܃܄܅܆܇܈܉܊܋܌܍܎܏ܐܑܒܓܔܕܖܗܘܙܚܛܜܝܞܟܠܡܢܣܤܥܦܧܨܩܪܫܬܭܮܯܱܴܷܸܹܻܼܾ݂݄݆݈ܰܲܳܵܶܺܽܿ݀݁݃݅݇݉݊݋݌ݍݎݏ",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsSyriac}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsSyriac}+)$"))
  )
