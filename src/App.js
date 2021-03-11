import { Component } from 'react'; 
import './App.css';
import Web3 from 'web3'; 

class App extends Component {
 componentDidMount() {
    this.loadBlockchainData();
 }
 async loadBlockchainData() {
 const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
 const accounts = await web3.eth.getAccounts();
 this.setState({ account: accounts[0]})
 }


 constructor(props) {
  super(props);
  this.state = { account: '' }
 }

 render () {
  return (
    <div className="App">
   <h1> Web3 React Template</h1> 
   <p>Your account: {this.state.account}</p>	  
   </div>
  );
 }
}

export default App;
