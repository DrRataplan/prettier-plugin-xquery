fn:contains((fn:doc($uri))/document-uri(), $uri) or
  ((fn:doc($uri))/document-uri() = "")
