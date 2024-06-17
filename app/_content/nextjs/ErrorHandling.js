const { Paragraph, CodeString } = require("@/app/_components/Text");

const errorhandling = [
  <Paragraph key={"errorfile"}>
    <CodeString>error.js</CodeString> is a file used to set a error fallback for
    each route segement. The error boundary provided by this file wraps the page
    component, but not the<CodeString> layout.js </CodeString>or
    <CodeString>templates.js</CodeString>. The layout will be kept visible when
    an error occurs within a certain route, Wwen a layout.js is not used the
    error will replace the page. Errors bubble to the nearest error boundary.
    The hieracnhy of layouts, pages and error boundaries ensures that error
    boundaries only affected the route segmenet they occur in. To handle errors
    in the globa layout, <CodeString>global-error.js</CodeString> is used. The
    global error handler must include teh html and body tags as it replaces the
    whole UI if an error is thrown in the root layout. the root route should
    always include a base static segement that is not affected by data fetching.
  </Paragraph>,
];
