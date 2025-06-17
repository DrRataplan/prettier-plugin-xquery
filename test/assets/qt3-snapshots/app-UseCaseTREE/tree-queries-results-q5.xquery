<section_list>
  {
    for $s in //section
    let $f := $s/figure
    return <section figcount="{ count($f) }" title="{ $s/title/text() }" />
  }
</section_list>
