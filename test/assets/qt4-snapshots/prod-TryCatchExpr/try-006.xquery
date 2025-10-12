declare variable $doc := doc("rubbish.xml");

try { $doc } catch * { <caught-error /> }
