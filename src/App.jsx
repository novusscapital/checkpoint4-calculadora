import { useState } from "react";
import Resultado from "../src/components/resultado";
import TabelaCalculos from "../src/components/tabela";

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

  const limpar = () => {
    setExpressao("");
    setResultado("—");
  };

  return (
    <>
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

            <div>
              <button type="button" onClick={() => adicionar("(")}>(</button>
              <button type="button" onClick={() => adicionar(")")}>)</button>
              <button type="button" onClick={() => adicionar("%")}>%</button>
              <button type="button" onClick={() => adicionar("/")}>/</button>
            </div>

            <div>
              <button type="button" onClick={() => adicionar("7")}>7</button>
              <button type="button" onClick={() => adicionar("8")}>8</button>
              <button type="button" onClick={() => adicionar("9")}>9</button>
              <button type="button" onClick={() => adicionar("*")}>*</button>
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
              <button type="button" onClick={() => adicionar("0")}>0</button>
              <button type="button" onClick={() => adicionar(".")}>.</button>
              <button type="button" onClick={calcular}>=</button>
              <button type="button" onClick={limpar}>C</button>
            </div>

            <Resultado valor={resultado} />
          </form>

          {/* Histórico dos Cálculos */}
          <TabelaCalculos historico={historico} />
        </div>
      </div>
    </>
  );
}

export default App;
