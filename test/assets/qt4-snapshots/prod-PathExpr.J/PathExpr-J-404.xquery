let $jin := jtree($in)
return (
    $jin//record("Author", "Title", *) except
      $jin/audiobooks//record("Author", "Title", *)
  )
    => count()
