import React, { useState } from "react";
import { evaluate } from "mathjs";
import '../src/css/global.css';

// Componente TabelaCalculos
const TabelaCalculos = ({ historico, limparHistorico }) => {
  return (
    <div className="history-container">
      <h2>Histórico</h2>
      <button type="button" onClick={limparHistorico}>Limpar Histórico</button>
      <table>
        <thead>
          <tr>
            <th>Operação</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {historico.map((item, index) => (
            <tr key={index}>
              <td>{item.expressao}</td>
              <td>{item.resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Componente Resultado
const Resultado = ({ valor }) => (
  <div id="resultado">
    <span>Resultado: {valor}</span>
  </div>
);

// Componente Header
const Header = () => (
  <header>
    <h1>Calculadora</h1>
  </header>
);

function App() {
  const [expressao, setExpressao] = useState("");
  const [resultado, setResultado] = useState("—");
  const [historico, setHistorico] = useState([]);

  const adicionar = (valor) => {
    setExpressao(expressao + valor);
  };

  const calcular = () => {
    try {
      const res = evaluate(expressao);
      setResultado(res);

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
            <TabelaCalculos historico={historico} limparHistorico={limparHistorico} />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
