import Link from "next/link";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
      <a>About</a>
    </Link>
    <button
      onClick={() => {
        console.log("Hello again to the new department");
      }}
    >
      Click me
    </button>
  </div>
);