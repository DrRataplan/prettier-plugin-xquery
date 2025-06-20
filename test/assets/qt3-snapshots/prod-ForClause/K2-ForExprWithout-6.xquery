for $ti in
  <ti>
    <rangeDate>
      <initDate>17880505</initDate>
      <terminatingDate>19550505</terminatingDate>
    </rangeDate>
  </ti>
return <result>
    {
      fn:min(
        if ($ti/singleDate) then
          let $tmp := $ti/singleDate/compute
          return xs:date(
              fn:concat(
                fn:substring($tmp, 1, 4),
                "-",
                fn:substring($tmp, 5, 2),
                "-",
                fn:substring($tmp, 7, 2)
              )
            )
        else
          let $tmp := $ti/rangeDate/initDate
          return xs:date(
              fn:concat(
                fn:substring($tmp, 1, 4),
                "-",
                fn:substring($tmp, 5, 2),
                "-",
                fn:substring($tmp, 7, 2)
              )
            )
      )
    }
  </result>
