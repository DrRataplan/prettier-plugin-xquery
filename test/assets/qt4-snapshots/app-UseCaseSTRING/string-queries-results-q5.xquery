for $item in //news_item
where contains(string(exactly-one($item/content)), "Gorilla Corporation")
return <item_summary>
    { concat($item/title, ". ") }
    { concat($item/date, ". ") }
    { string(($item//par)[1]) }
  </item_summary>
