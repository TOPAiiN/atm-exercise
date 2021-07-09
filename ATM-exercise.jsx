const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Cash Back"];
  return (
    <label >
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  // const [transaction, setTransaction] = React.useState(0);
  // let transactionState = 0; // state of this transaction
  let deposit = 0; //state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  let status = `Account Balance $ ${totalState}`;
  // console.log('Account Rendered');
  
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    if (Number(event.target.value) > totalState && setIsDeposit(true)) { return 
    }else{
      deposit = Number(event.target.value);
    }
  };

  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit: totalState - deposit;
    setTotalState(newTotal);
    event.preventDefault();
  };
  return (
    
    <form className="form" onSubmit={handleSubmit}>
      <h2 id='total'>{status}</h2>
      <button id="button-deposit" onClick={() => setIsDeposit(true)}>Deposit</button>
      <button id="button-cashback" onClick={() => setIsDeposit(false)}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
    
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
