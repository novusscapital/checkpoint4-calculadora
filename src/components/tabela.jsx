import '../css/global.css'
import '../css/tabela.css'

function TabelaCalculos({ historico }) {
  return (
    <table className="historico">
      <thead>
        <tr>
          <th>Operação</th>
          <th>Resultado</th>
        </tr>
      </thead>
      <tbody>
        {historico.length === 0 ? (
          <tr>
            <td colSpan="2">Nenhum cálculo realizado ainda</td>
          </tr>
        ) : (
          historico.map((item, index) => (
            <tr key={index}>
              <td>{item.expressao}</td>
              <td>{item.resultado}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TabelaCalculos;
