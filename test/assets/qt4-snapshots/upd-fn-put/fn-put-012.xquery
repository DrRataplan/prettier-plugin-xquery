declare variable $uri external;

fn:put(document { <test /> }, $uri), fn:put(document { <test2 /> }, $uri)
