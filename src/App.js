import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Navigation from './components/navigation'
import Main from './components/main'
import Subcontent from './components/subcontent'
import Advertisement from './components/advertisement'


 
                
function App() {
  return (
    <div className="App">
        <Header />
        <div className='Flex'>
          <Navigation />
          <Main>
              <div className='Inline'>
              <Subcontent />
              <Subcontent />
              <Subcontent />
              </div>
              <Advertisement />
          </Main>
        </div>
    </div>
  );
}
                
export default App;

