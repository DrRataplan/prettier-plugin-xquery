array{
  for $page in doc($uri)//page
  return map {
      "title": string($page/title),
      "id": string($page/id),
      "last updated": string($page/revision[1]/timestamp),
      "authors":
        array{
          for $a in $page/revision/contributor/username
          return string($a)
        }
    }
}
