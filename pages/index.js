import Link from "next/link";
import axios from "axios";
import Head from "next/head";

const App = ({ data }) => {
  return (
    <>
      <Head>
        <title>Front page</title>
        <meta
          name="google-site-verification"
          content="nJKzLkR7UKXOdYtFfc7fgCO6Hml0Mi5zCHHFHU9BI1k"
        />
        <meta name="description" content={data[0].heading} />
      </Head>
      {/* <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About</a>
      </Link> */}
      <div>
        {data.map((val) => {
          return <h1>{val.heading}</h1>;
        })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get(
    "https://zen-newton-5723fe.netlify.app/.netlify/functions/api/"
  );

  const data = await res.data.arr;
  return {
    props: {
      data,
    },
  };
}

export default App;

/* import Link from "next/link";
import { nanoid } from "nanoid";

const NewsLink = ({ slug, title }) => (
  <Link href="/news/[slug]" as={`/news/${slug}`}>
    <a>{title}</a>
  </Link>
);

export default function Index() {
  return (
    <div>
      <h1>The News Portal</h1>
      <ul>
        <li>
          <NewsLink slug={`srilanka-${nanoid(15)}`} title="Sri Lanka" />
        </li>
        <li>
          <NewsLink slug="covid19" title="Covid 19" />
        </li>
        <li>
          <NewsLink slug="globalwarming" title="Global Warming" />
        </li>
      </ul>
      <div className="learn-more">
        <a href="https://arunoda.me/blog/what-is-nextjs-issg">
          What is Next.js iSSG?
        </a>
      </div>
      <style jsx>{`
        div {
          font-family: Arial;
          margin: 50px 30px;
        }

        li {
          margin: 10px 0;
        }

        a,
        li :global(a) {
          text-decoration: none;
        }

        .learn-more {
          position: fixed;
          bottom: 0px;
          left: 30px;
          padding: 30px 0;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
 */
