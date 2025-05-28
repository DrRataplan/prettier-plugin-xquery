let $doc := doc("rubbish.xml")
return try {
    $doc
  } catch * {
    <caught-error />
  }
