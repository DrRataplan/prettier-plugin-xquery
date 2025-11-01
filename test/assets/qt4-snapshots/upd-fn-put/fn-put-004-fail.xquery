declare variable $input-URI external;

fn:put(processing-instruction myPI { "This is a test" }, $input-URI)
