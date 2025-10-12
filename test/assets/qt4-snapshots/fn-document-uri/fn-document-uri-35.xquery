fn:string-join(
  (fn:string(fn:contains((fn:doc($uri))/document-uri(), $uri)), " A String"),
  ""
)
