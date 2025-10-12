let $data := <Root>
  <DATA
  >/OPDH/FLOWING SOLUTION/SGDE/Number0983713/EKPH/Sample test/some other keys/</DATA>
  <DATA
  >/some other keys/afdsf/SGDE/Number0983713/some other keys/PIHSAGA/OPDH/FLOWING SOLUTION/some other keys/No exception/EKPH/Sample test/some other keys/</DATA>
</Root>
return document {
    <out>
      {
        $data/DATA!analyze-string(
          .,
          "(/OPDH/|/EKPH/|/SGDE/|/some other keys/)(.*?)(/OPDH/|/EKPH/|/SGDE/|/some other keys/)((.*?)(/OPDH/|/EKPH/|/SGDE/|/some other keys/))*"
        )
      }
    </out>
  }
