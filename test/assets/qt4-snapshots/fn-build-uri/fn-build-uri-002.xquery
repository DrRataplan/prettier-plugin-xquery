fn:build-uri(
  map {
    "scheme": "https",
    "host": "example.com",
    "path-segments": ("", "path", "to", "file"),
    "path": "/wont/be/used"
  },
  map {}
)
