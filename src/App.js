import './App.css';
import imageInSrc from "./assets/imgSrc.jpg";
import  myVideo from "./assets/alive-canada-4k.mp4";

function App() {
  return (
    <div className="App">
      
      <div style = {{border: "solid 1px black", maxWidth: "100vw"}}>

                <h1 className = "title-red"> WAAAAW .. welcome to NATURE </h1>

                <br />

                <img src ={imageInSrc} alt="imageSource" />

                <br />

                <img src="./imgPublic.jpg" alt="public" />

                </div>
                <video width="320" height="240" controls>
                                  
                    <source src={myVideo}  type = "video/mp4" />

                </video>


             
                    
    </div>
  );
}

export default App;
