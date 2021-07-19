import Link from "next/link";
import styles from "../../styles/Slavebos.module.css";

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const slaves = await resp.json();

  return {
    props: {
      slaves: slaves,
    },
  };
};

const Slavebos = ({ slaves }) => {
  return (
    <div>
      <h1>Slavebos all</h1>
      {slaves.map((slave) => (
        <Link href={"/slavebos/" + slave.id} key={slave.id}>
          <a className={styles.single}>
            <h3>{slave.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Slavebos;
