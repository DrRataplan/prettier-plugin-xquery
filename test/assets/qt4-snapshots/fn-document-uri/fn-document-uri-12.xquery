fn:contains(fn:document-uri(fn:doc($uri)), $uri) or
  (fn:document-uri(fn:doc($uri)) = "")
