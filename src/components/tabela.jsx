function TabelaCalculos({ historico }) {
  return (
    <table border="1" style={{ marginTop: "16px", width: "100%", textAlign: "center" }}>
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
