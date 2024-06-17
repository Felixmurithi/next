import { Article, Section } from "@/app/_components/Page";
import { csrHydration } from "@/app/_content/nextjs/fundamentals";
import { nextFramework } from "./_content/nextjs/theframework";

function page() {
  return (
    <Article>
      <Section>
        <h1>Next JS</h1>
        {csrHydration}

        {nextFramework}

        {/* React server componenets are by converting react components into. inspecting page source */}

        {/* how is the hdration done when it comes to the component rendered to
      string. */}
      </Section>
    </Article>
  );
}

export default page;
