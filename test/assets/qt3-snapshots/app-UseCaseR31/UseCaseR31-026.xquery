for $sarah in collection($users-collection-uri),
  $friend in collection($users-collection-uri)
where $sarah("name") = "Sarah" and $friend("name") = $sarah("friends")?*
return $friend("name")
