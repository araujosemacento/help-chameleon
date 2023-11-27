const CodeResult = ({ message, output }) => {
    return (
      <div>
        <h2>Saída do Console</h2>
        <pre>{output}</pre>
        <p>{message}</p>
      </div>
    );
  };
  
  export default CodeResult;