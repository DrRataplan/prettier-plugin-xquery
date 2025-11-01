fn:build-uri(
  map {
    "scheme": "http",
    "hierarchical": true(),
    "authority": "example.com",
    "host": "example.com",
    "path-segments": ("", "🤷 ¡¢£¤ǌ†𓇌𓆑🏴󠁧󠁢󠁷󠁬󠁳󠁿"),
    "query-parameters": map {"a": ("🤷 ¡¢£¤ǌ"), "b": ("†𓇌𓆑🏴󠁧󠁢󠁷󠁬󠁳󠁿")},
    "fragment": "🤷 ¡¢£¤ǌ†𓇌𓆑🏴󠁧󠁢󠁷󠁬󠁳󠁿"
  }
)
