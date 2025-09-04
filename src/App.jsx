import Header from "./components/header";
import { useState, useEffect } from "react";
import Resultado from "../src/components/resultado";
import TabelaCalculos from "../src/components/tabela";
import '../src/css/global.css'


function App() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState("—");
  const [historico, setHistorico] = useState([]);

  const adicionar = (valor) => {
    setExpressao(expressao + valor);
  };

  const calcular = () => {
    try {
      const res = eval(expressao);
      setResultado(res);

      // salva no histórico
      setHistorico([
        ...historico,
        { expressao: expressao, resultado: res }

      ]);
    } catch (e) {
      setResultado("Erro");
    }
  };

  const limparHistorico = () => {
    setHistorico([]);
  };

  const limpar = () => {
    setExpressao("");
    setResultado("—");
  };

  return (
    <>
      <Header />
      <div className="Container">
        <div className="box">
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="display">
                <span>Digite sua operação: </span>
              </label>
              <input
                type="text"
                id="display"
                placeholder="Exemplo: 2+2*3-5/10"
                value={expressao}
                onChange={(e) => setExpressao(e.target.value)}
              />
            </div>

            <div class="progress-container">
              <div class="progress-bar" id="myBar"></div>
            </div>

            <section className="box-button">
              <div>
                <button type="button" onClick={() => adicionar("7")}>7</button>
                <button type="button" onClick={() => adicionar("8")}>8</button>
                <button type="button" onClick={() => adicionar("9")}>9</button>
                <button type="button" onClick={() => adicionar("*")}>X</button>
                <button type="button" onClick={() => adicionar("/")}>/</button>
              </div>

              <div>
                <button type="button" onClick={() => adicionar("4")}>4</button>
                <button type="button" onClick={() => adicionar("5")}>5</button>
                <button type="button" onClick={() => adicionar("6")}>6</button>
                <button type="button" onClick={() => adicionar("-")}>-</button>
              </div>

              <div>
                <button type="button" onClick={() => adicionar("1")}>1</button>
                <button type="button" onClick={() => adicionar("2")}>2</button>
                <button type="button" onClick={() => adicionar("3")}>3</button>
                <button type="button" onClick={() => adicionar("+")}>+</button>
              </div>

              <div>
                <button type="button" onClick={() => adicionar(",")}>,</button>
                <button type="button" onClick={() => adicionar("0")}>0</button>
                <button type="button" onClick={calcular}>=</button>
                <button type="button" onClick={limpar}>C</button>
                <button type="button" onClick={limparHistorico}>CE</button>
              </div>

            </section>
            <Resultado valor={resultado} />
          </form>
        </div>
        <TabelaCalculos historico={historico} />
      </div>
    </>
  );
}

export default App;
