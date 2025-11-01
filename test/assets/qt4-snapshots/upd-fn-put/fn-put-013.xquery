declare variable $uri-a external;

declare variable $uri-b external;

fn:put(document { <test-a /> }, $uri-a), fn:put(document { <test-b /> }, $uri-b)
