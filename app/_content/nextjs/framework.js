import { CodeString, Note, Paragraph, TextBold } from "@/app/_components/Text";
import Link from "next/link";

export const nextFramework = [
  <Paragraph key={"routesbasics"}>
    Routing is based on folders and file with predetermined names names that
    render the content. The app folder is where all the routes are implemeneted.
    At the root of this folder, the root route is where the
    <CodeString>RootLayout</CodeString>component in the{" "}
    <CodeString>layout.js</CodeString> page renders the application&apos;s
    nested page using children prop as the outlet of the application. The{" "}
    <CodeString>Page</CodeString> component declared the
    <CodeString>page.js</CodeString> at the root of the app folder is rendered
    by default. A error boundary Nested routes are implemented using folders,
    error boundaries implemented. Each applicatiojn must ahve a root layout page
    and Next JS will add it automtically if its not there in developement or
    prodution. a layouut will always per persiste bwteeen renders what will
    change is the nested segments. a tempalte.js file can replace a layout file
    because it will be rerendered on each shared segement. when used together
    with the layout the template will be nested inside the layout, "used for
    ogic that relies on useEffect or useState like tracking analytics or form
    submissions." meta datais not add diretly but exported as objectb or
    generated using the generatedMetadata function in the page/layout file
  </Paragraph>,

  <Paragraph key={"pagecomponent"}>
    The <TextBold>Page Component</TextBold>in the page.js file of a route
    segement should ideally be a server component, server componenets are able
    to fetch data directly and server components have direct access to page
    params and are able to setMetadata which is very needed for SEO. They are
    marked async inorder to utilise await and promises. In client components
    server actions are used to data request. server actions are written inm a
    file marked "use server" and they expose a way to make requests from a form
    in a client component, they act as an api to make requests to the browser,
    they can work even with js disable. nserver actions can also be caleld in
    other event handlers. The function declared in the server action file will
    be assigned the action prop and there it will reciev the form data as
    reprensted by input field names. Additional data can be binbded tothe
    function and assigned as new name.
  </Paragraph>,

  <Paragraph key={"navigation"}>
    To hard naiviagte navigater within a client use a Link which is rendere to
    anchor, add #to nevaigate to a section. When moving to a page next will
    always scroll to top the page, if page is below the view port menaing the
    layout section covers the view , next will still scroll to the top of the
    page, in the case where it starts.In backwward and forward navigation the
    default behaviour is to restore scroll position because of teh route cache.
    This turned off by using scroll = false prop. soft navigation can be done
    using redirect in a server action which recives teh route segemenet and
    eitehr push or replace as the second argumenet, with push bing the default
    or the
    <Link href={""}>useRouter</Link> hook returns a router object with options
    such as{" "}
    <CodeString>{`router.push(href: string, { scroll: boolean }), router.replace(href: string, { scroll: boolean }), router.refresh()router.prefetch(href: string), router.back(), router.forward()`}</CodeString>
    . usePathname and useSearchParams return the values of the current route
    segmenety
  </Paragraph>,

  <Note key={"userouter"}>
    The useRouter hook should be imported from next/navigation and not
    next/router when using the App Router
  </Note>,
  <Note key={"useparams"}>
    {" "}
    when use params componenet is added to a servr componenet, it is wrapped in
    a Suspense boundary because useSearchParams() causes client-side rendering
    up to the closest Suspense boundary during static rendering.
  </Note>,

  //GPT says templates dop get queries
  // promise .all wild oasis website app - TO DO
  // server actions- react
  // codes in next js

  <Paragraph key={"dyanmicroutes"}>
    Dyanmic route params are generate by using a nested route folder named as
    [route]. The folder behaves like route, hewoever the page component file
    recieves the params object with the dynamic param value after a request.
    With a small number of dynamic routes, pages can be pregenerated at build
    and cached as static pages. The pages are pregenerated using the{" "}
    <CodeString>generateStaticParams</CodeString> is used pregenerates these
    pages should return an array with objects, each with same property name
    represneting the dynamic param and a value of each dynamic route. Declaring
    a dynamic route as
    <Link
      href={`https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments`}
    >
      <CodeString>[...catch all routes]</CodeString>
    </Link>{" "}
    allows for the more than segement on the same route segements. It must be
    the last child route folder . [[...optional-catch-all-routes]] is used when
    the parent route does not include a <CodeString>page.js</CodeString> file.{" "}
    <CodeString>route/</CodeString> will still return the page under{" "}
    <CodeString>[[...optional-catch-all-routes]]</CodeString> in this scenario.
  </Paragraph>,
  // is 29 true?

  <Paragraph key={"groupingroutes"}>
    Next JS implements
    <Link
      href={
        "https://nextjs.org/docs/app/building-your-application/routing/route-groups"
      }
    >
      route groups
    </Link>
    , two or more routes to share layout section, two or more pages can occup
    different sections of the page.
  </Paragraph>,
  //TODO

  <Note key={"datafetching"}></Note>,

  <Paragraph key={"fileorganization"}>
    <Link href={"/"}>Project file organization</Link>
    is only opinionated when it comes to concetcion files
  </Paragraph>,
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
