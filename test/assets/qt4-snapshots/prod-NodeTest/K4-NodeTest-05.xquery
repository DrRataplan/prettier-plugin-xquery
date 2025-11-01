declare namespace p = "http://p.com/";

parse-xml('<p:a xmlns:p="http:/q.com/"/>') instance of document-node(p:*)
