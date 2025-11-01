fn:build-uri(
  map {
    "uri": "jar:file:/C:/Program%20Files/test.jar!/foo/bar",
    "scheme": "jar",
    "path": "file:/C:/Program%20Files/test.jar!/foo/bar",
    "path-segments": ("file:", "C:", "Program Files", "test.jar!", "foo", "bar")
  }
)
