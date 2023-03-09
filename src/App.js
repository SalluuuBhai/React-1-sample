
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>{name1}</h1>
      <h2>{name2}</h2>
      <p>Hi this is {name1} {name2}, I'm from {place}. </p>     */}
      <Details 
        access = "✔" 
        name = "Salman" 
        batch = "B43WD" 
        img = "https://cdn1.vectorstock.com/i/1000x1000/27/65/cute-boy-face-cartoon-vector-23302765.jpg" />
      <Details
        access = "✔"
        name = "Ahamed" 
        batch = "B45WD"
        img = "https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
        />
      <Details 
        access = "❌" 
        name = "Sriram" 
        batch = "B44WD" 
        img = "https://easydrawingguides.com/wp-content/uploads/2021/12/how-to-draw-a-scared-face-featured-image-1200-882x1024.png"/>
      <Details 
      access = "✔" 
      name = "Bhaarath" 
      batch = "B42WD" 
      img = "https://thumbs.dreamstime.com/z/boy-angry-face-expression-cartoon-vector-illustrations-isolated-white-little-background-kid-emotion-icons-facial-expressions-141390804.jpg" />
    </div>
  );
}

export default App;

function Details(props){
  return(
    <div className="card">
      <img src = {props.img} alt = {props.name}/>
      <h2><span>{props.access}</span>{props.name}</h2>
      <p>{props.batch}</p>
    </div>
  );
}