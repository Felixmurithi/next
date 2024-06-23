import Link from "next/link";

import CodeHighlight from "@/app/_components/CodeHighlight";
const { Paragraph, TextBold, CodeString } = require("@/app/_components/Text");

export const importingcliienttoserever = [
  <Paragraph key={"clientserverprop"}>
    Next JS utilizes{" "}
    <Link href="https://react.dev/reference/rsc/server-components">
      react server componets (RSC)
    </Link>{" "}
    that are run are rendered from a server. React server components include
    static server components and interactive client components. Next JS coverts
    each route page component tree to a streamable RSC payload which includes
    the static server components, placeholders where client components will be
    placed, the static parts of the client components server, client components
    react code cdn links and props passed from server to client components. The
    static parts of the components are first rendered on the server before being
    sent as HTML, the server components placeholders are used to add the client
    components HTML in the right places. The cdn links hydrate the html of the
    client components for interactivity.
    <Link href={"https://react.dev/reference/react-dom/client/hydrateRoot"}>
      hydrates
    </Link>
    the html. The code is split in built son to have differnet rsc payloadsfor
    each route and segments for rendering and streaming
  </Paragraph>,

  <Paragraph key={"componentsboundary"}>
    Components in Next JS are considered server componenets by default. Server
    components cannot include react hooks. Client componets files must marked
    with <CodeString>&quot;useclient&quot;</CodeString> to differentiate with
    server components. Server can import server client components, however
    client components cannot directly import server. Server components can
    directly import client component however client components cannot directly
    import server components. This separation ensures that server component
    static is streamed before the react bundle which is tends to heavier and
    takes more time to load. A interweaving pattern is used to render server
    component within a client component. A client component is imported to a
    server component, in the same server component, the server component that is
    to be rendered by the client is imported and passed as props to the server
    component.
  </Paragraph>,

  <Paragraph key={"hydration"}>
    When a page is requested all the html is{" "}
    <Link href={"https://github.com/reactwg/react-18/discussions/37"}>
      loaded
    </Link>
    , rendered and all the code is loaded before hydration can begin. This
    blocking pattern can lead a bad UX if some of static components are very
    expensive and might leads to a noticeable time lapse before the rendered
    html is hydrated interactive.
    <TextBold>Suspense</TextBold> is a react component ran on the server that is
    used to enhace the effieciency of streaming and hydration. The streaming of
    components wether server or client rendered by Suspense is delayed until all
    their data has been loaded, Suspense selective hydration prioritises
    hydrating the component the user has tried interacted with, the code will be
    delivered on the cpature phase of the triggered event.
  </Paragraph>,
  <Paragraph key={"loading-js"}>
    The <CodeString>loading.js</CodeString> implements Suspense by default. The
    componebnt returned by this file
  </Paragraph>,
];
