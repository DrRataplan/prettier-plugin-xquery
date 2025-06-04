<figlist>
  {
    for $f in //figure
    return <figure>{
          $f/@*
        }{
          $f/title
        }</figure>
  }
</figlist>
