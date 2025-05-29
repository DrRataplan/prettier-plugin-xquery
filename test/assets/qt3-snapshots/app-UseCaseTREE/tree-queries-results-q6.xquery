declare function local:section-summary (
  $book-or-section as element()*
) as element()* {
  for $section in $book-or-section
  return <section> {
        $section/@*
      } {
        $section/title
      } <figcount> {
          count($section/figure)
        } </figcount> {
        local:section-summary($section/section)
      } </section>
};

<toc> {
    for $s in /book/section
    return local:section-summary($s)
  } </toc>
