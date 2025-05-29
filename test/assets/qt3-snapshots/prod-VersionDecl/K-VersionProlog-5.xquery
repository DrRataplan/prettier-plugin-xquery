xquery version "1.0" encoding "ISO-8859-1";

declare default element namespace "http://example.com/";
declare default function namespace "http://example.com/";

declare boundary-space preserve;
declare default collation "http://www.w3.org/2005/xpath-functions/collation/codepoint";
declare base-uri "http://example.com/";
declare construction strip;
declare ordering ordered;
declare default order empty greatest;
declare copy-namespaces no-preserve ,  no-inherit;

declare namespace ex = "http://example.com/a/Namespace";

declare option fn:x-notRecognized "option content";

1 eq 1
