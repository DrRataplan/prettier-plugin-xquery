(: Description: In LetClause, binding expr's ST must be subtype of variable's ST. Under REC FS, both are 'processing-instruction?', so STA succeeds. Under PER FS, former is 'processing-instruction filesystem?', latter is 'processing-instruction filesytem', so STA fails, raises error. (Note that an implementation that doesn't do STA will not raise an error.) :) let $pi as processing-instruction(filesystem) :=
  (//processing-instruction(filesystem))[1]
return $pi
