<books-with-prices>
  {
    for $b in $bib//book, $a in $reviews//entry
    where $b/title = $a/title
    return <book-with-prices>
      { $b/title }
      <price-bstore2>{ $a/price/text() }</price-bstore2>
      <price-bstore1>{ $b/price/text() }</price-bstore1>
    </book-with-prices>
  }
</books-with-prices>
