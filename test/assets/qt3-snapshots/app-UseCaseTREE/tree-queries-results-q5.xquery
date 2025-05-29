<section_list> {
  for $s in //section
  let $f := $s/figure
  return <section title="{
      $s/title/text()
    }" figcount="{
      count($f)
    }"/>
} </section_list>
