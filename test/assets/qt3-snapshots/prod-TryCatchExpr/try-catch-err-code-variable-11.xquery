try { fn:error() } catch * { fn:local-name-from-QName($err:code) }
