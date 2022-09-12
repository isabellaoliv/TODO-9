import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  const [endereco, setEndereco] = useState([]);

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getAddress = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();

      console.log(data);
      setEndereco([...endereco, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(endereco);

  const enderecoAtt = endereco.map((e) => (
    <>
      <div className="conteudo-single">
        <h3>{e.name}</h3>
        <img className="proPhoto" src={e.image} />
        <p>{e.description}</p>
        <h4>{"De R$: " + e.oldPrice}</h4>
        <h3>{"Por R$: " + e.price}</h3>
        <input className="botaoEnv" type="submit" name />
      </div>
    </>
  ));

  const showMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getAddress();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <div className="center">
          {enderecoAtt}
          <button className="botaoMostra" onClick={showMore}>
            Mais produtos aqui!
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;