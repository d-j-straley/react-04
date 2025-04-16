import ReactDOM from "react-dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  /*
   * below, I modified the return to create an unordered list
  */
  return (
    <>
      <ul>
      {data &&
        data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
        </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);