declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "yes";
declare option output:html-version "5.0";

<html>
  <body>
    <p>A blue<svg height="100" width="100">
        <circle
          cx="50"
          cy="50"
          fill="yellow"
          r="40"
          stroke="green"
          stroke-width="4" />
      </svg>rectangle</p>
  </body>
</html>
