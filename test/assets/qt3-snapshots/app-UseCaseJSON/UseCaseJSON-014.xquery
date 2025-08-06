let $feed := json-doc("incoming.json")("feed"), $entry := $feed("entry")
return if ($entry?*("app$control")("yt$state")("name") = "restricted") then
  map:remove($feed, "entry")
else
  $feed
