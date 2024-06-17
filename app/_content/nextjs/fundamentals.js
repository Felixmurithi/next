import CodeHighlight from "../../_components/CodeHighlight";
import { Paragraph } from "../../_components/Text";

export const csrHydration = [
  <Paragraph key={1}>
    {`Next Js is a javascript framework built on top of react. It implements
      react server components, convections on routing, authtentication
      andauthorization, htnl headers info, . React server componenets
      areimplemented to co join the client side funbctionality with server
      render component.`}
  </Paragraph>,

  <Paragraph key={2}>
    {`Client Rendered Component in reacts are convereted to a html string and then hydrated on the browser using the React and React dom packages that are downloaded via a cdn and their objects exposed to the client. The result of this is a very initial html render and then a hydration of the html.`}
  </Paragraph>,

  <Paragraph
    key={3}
  >{`a react component will be rendered on the string.`}</Paragraph>,

  <CodeHighlight
    key={4}
    codeString={`function Likes() {
  const [count, setCount] = React.useState(0);

  return (
    <figure>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <span>♥</span>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </figure>
  );`}
  />,
];
