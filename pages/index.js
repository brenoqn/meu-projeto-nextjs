import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Clique e veja o produto!</h1>
      <br />
      <Link href="/produto" legacyBehavior>
        Produto
      </Link>
    </div>
  );
}

export default HomePage;
