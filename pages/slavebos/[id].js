export const getStaticPaths = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const slaves = await resp.json();
  const paths = slaves.map((slave) => {
    return {
      params: { id: slave.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (contex) => {
  const id = contex.params.id;
  const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const slave = await resp.json();

  return {
    props: { slave },
  };
};

const Details = ({ slave }) => {
  return (
    <div>
      <h1>Details Page</h1>
      <h1>{slave.name}</h1>
      <p>{slave.email}</p>
      <p>{slave.website}</p>
      <p>{slave.address.city}</p>
    </div>
  );
};

export default Details;
