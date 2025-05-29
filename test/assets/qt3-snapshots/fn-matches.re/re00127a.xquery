matches("&#xD;&#xD;a&#xD;&#xD;b&#xD;&#xD;", "^\r\ra\r\rb\r\r$"),
matches("&#xD;&#xD;a&#xD;&#xD;b&#xD;&#xD;", "^\r\ra\r\rb\r\r$"),
matches("&#xD;&#xD;a&#xD;&#xD;b&#xD;", "^(?:\r\ra\r\rb\r\r)$"),
matches("&#xD;a&#xD;&#xD;b&#xD;&#xD;", "^(?:\r\ra\r\rb\r\r)$"),
matches("&#xD;&#xD;a&#xD;&#xD;&#xD;&#xD;", "^(?:\r\ra\r\rb\r\r)$"),
matches("&#xD;&#xD;a&#xD;&#xA;&#xD;b&#xD;&#xD;", "^(?:\r\ra\r\rb\r\r)$")
