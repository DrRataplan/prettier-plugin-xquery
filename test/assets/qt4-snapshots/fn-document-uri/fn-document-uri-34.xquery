fn:concat(
  fn:string(fn:contains((fn:doc($uri))/document-uri(), $uri)),
  " A String"
)
