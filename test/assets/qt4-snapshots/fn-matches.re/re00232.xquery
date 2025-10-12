(
  every
    $s in
    tokenize(
      "଀୿,଀ଁଂଃ଄ଅଆଇଈଉଊଋଌ଍଎ଏଐ଑଒ଓଔକଖଗଘଙଚଛଜଝଞଟଠଡଢଣତଥଦଧନ଩ପଫବଭମଯର଱ଲଳ଴ଵଶଷସହ଺଻଼ଽାିୀୁୂୃୄ୅୆େୈ୉୊ୋୌ୍୎୏୐୑୒୓୔୕ୖୗ୘୙୚୛ଡ଼ଢ଼୞ୟୠୡୢୣ୤୥୦୧୨୩୪୫୬୭୮୯୰ୱ୲୳୴୵୶୷୸୹୺୻୼୽୾୿",
      ","
    ) satisfies
    matches($s, "^(?:\p{IsOriya}+)$")
) and
  (
    every
      $s in
      tokenize("", ",") satisfies
      not(matches($s, "^(?:\p{IsOriya}+)$"))
  )
