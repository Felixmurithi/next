import { CodeString, Paragraph } from "@/app/_components/Text";
import Link from "next/link";

export const nextFramework = [
  <Paragraph key={1}>
    Next Js framework implementes a number of rules on how content is rendered.
    Routing is based on folders and file names with predetermined names that
    render the content. The app folder is where all the routes are implemeneted.
    At the root of this folder, the root route is where the
    <CodeString>RootLayout</CodeString>component in the{" "}
    <CodeString>layout.js</CodeString> page renders the application&apos;s
    nested page using children prop as the outlet of the application. The{" "}
    <CodeString>Page</CodeString> compopnent declared the
    <CodeString>page.js</CodeString> at the root of the app folder is rendered
    by default. A error boundary Nested routes are implemented using folders,
    error boundaries implemented.
  </Paragraph>,

  <Paragraph key={"dyanmicroutes"}>
    Dyanmic routes are generate by using a nested route folder with its name in
    sqaure brackets [route]. The folder behaves like route, hewoever the page
    component file recieves the params object with the dynamic route has prop.
    With a small number of dynamic routes, these pages can be pregenerated at
    build and sent as static pages when reguested. The pages are pregenerated
    using the <CodeString></CodeString>{" "}
  </Paragraph>,

  <Paragraph key={"groupingroutes"}>
    Next JS allows for{" "}
    <Link
      href={
        "https://nextjs.org/docs/app/building-your-application/routing/route-groups"
      }
    >
      grouping routes
    </Link>
    allowing two or more routes to be emmbeded within one layout section
  </Paragraph>,

  <Paragraph key={"fileorganization"}>
    <Link>Project file organization</Link>
    is only opinionated when it comes to concetcion files
  </Paragraph>,
];
