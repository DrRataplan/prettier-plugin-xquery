let $ex :=
  <bla>
    <n>10</n>
    <n>123</n>
    <n> 1234 </n>
    <n> 2345.6 </n>
    <n>
         1555
      </n>
    <n> 12345 </n>
  </bla>
return $ex//n[. > 1000]!xs:decimal(.)
