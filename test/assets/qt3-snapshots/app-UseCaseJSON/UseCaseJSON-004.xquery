let $users := json-doc("users.json")?*
for $sarah in $users, $friend in $users
where $sarah?name = "Sarah" and $friend?name = $sarah?friends
return $friend?name
