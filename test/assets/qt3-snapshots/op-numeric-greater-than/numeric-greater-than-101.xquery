let $ex := <bla>
  <n> -2 </n>
  <n> -3.0e5 </n>
  <n> +2345.6e0 </n>
  <n>
         +5678e0
      </n>
  <n>
         1.2345e4
      </n>
  <n>
         5.6789e+4
      </n>
  <n>
         INF
      </n>
</bla>
return $ex//n[. > 1000]!xs:double(.)
