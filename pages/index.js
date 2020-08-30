import Link from "next/link";
import axios from "axios";

const App = ({ data }) => {
  return (
    <>
      <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
        <a>About</a>
      </Link>
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
