import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const link = "http://www.google.com";
  return (
    <div className="App">
     <div className="content"> 
       <h1>{ title }</h1>
       <a href={link}>Google Site</a>
     </div>
    </div>
  );
}

export default App;
