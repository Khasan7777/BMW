
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Showcase from './components/showcase/Showcase';
import Display from './components/Display/Display';
import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Hero/>
         <Showcase/>
         <Display/>
        <Card/> 
         </div>
  );
}
export default App;
