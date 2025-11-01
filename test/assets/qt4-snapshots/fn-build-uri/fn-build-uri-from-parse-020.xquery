fn:build-uri(
  map {
    "uri": "ldap://[2001:db8::7]/c=GB?objectClass?one",
    "scheme": "ldap",
    "authority": "[2001:db8::7]",
    "host": "[2001:db8::7]",
    "path": "/c=GB",
    "query": "objectClass?one",
    "query-parameters": map {"": "objectClass?one"},
    "path-segments": ("", "c=GB")
  }
)
