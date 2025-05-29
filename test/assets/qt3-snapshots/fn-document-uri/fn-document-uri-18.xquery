fn:concat(
  fn:string(fn:contains(fn:document-uri(fn:doc($uri)), $uri)),
  " A String"
)
