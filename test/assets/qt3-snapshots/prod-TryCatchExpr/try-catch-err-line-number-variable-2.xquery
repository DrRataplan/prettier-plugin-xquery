try { fn:error() } catch * { count($err:line-number) }
