
import './App.css';

function App() {
  let friendship="True friends are never apart, maybe in distance but never in heart.";
  let name="GADDAMKEERTHANA";
  let msg ="Dare to be free, Dare to go as far as your thought leads, and dare to carry that out in your life.";
  let msg1="   mera bharat mahaan    ";
  let alphabets="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzఅఆఇఈఉఊఋఌఎఏఐఒఓఔ";

  return (
    
    <div className="App">
      <h1>String methods </h1>
      <button onClick={()=>{
        console.log(friendship.length);
      }}>length</button>
      <button onClick={()=>{
        console.log(friendship.charAt(8));
      }}>CharAt</button>
      <button onClick={()=>{ 
        console.log(friendship.toUpperCase());
      }}>toUpperCase</button>
      <button onClick={()=>{
        console.log(friendship.toLowerCase());
      }}>toLowerCase</button>
      <button onClick={()=>{
       
        console.log(name.slice(4,9));
      }}>slice</button>
      <button onClick={()=>{
        console.log(name.substring(4,9));
      }}>substring</button>
      <button onClick={()=>{
        console.log(name.substr(3,7));
      }}>substr</button>
      <button onClick={()=>{
        console.log(msg.replace("Dare","courage"));
      }}>replace</button>
      <button onClick={()=>{
        console.log(msg.replaceAll("Dare","courage"));
      }}>replaceAll</button>
      <button onClick={()=>{
        let msg1="mera Bharat";
        let msg2="mahaan";
        // console.log(msg1.concat(msg2));
        console.log(`${msg1} ${msg2}`)
      }}>concat</button>
     
      
      <button onClick={()=>{
        console.log(`--->${msg1.trim()}<---`);
      }}>trim</button>
      <button onClick={()=>{
        console.log(`--->${msg1.trimStart()}<---`);
      }}>trimStart</button>
      <button onClick={()=>{
        console.log(`--->${msg1.trimEnd()}<---`);
      }}>trimEnd</button>
      <button onClick={()=>{
        let wbu="what about you";
        console.log(wbu);
        console.log(wbu.padStart(20,"w"));
        
      }}>padStart</button>
      <button onClick={()=>{
        let wbu="what about you";
        console.log(wbu);
        console.log(wbu.padEnd(20,"u"));
      }}>padEnd</button>
      <button onClick={()=>{
        
        for(let i=0;i<alphabets.length;i++){
          console.log(`${alphabets.charAt(i)}--->${alphabets.charCodeAt(i)}`);
        }


      }}>charCodeAt</button>
      <button onClick={()=>{
        for(let i=3077;i<=5000;i++){
     console.log(String.fromCharCode(i));
      }
        
      }}>fromCharCode</button>
      <button onClick={()=>{
        console.log(friendship.split(""));
      }}>split</button>
      <button onClick={()=>{
        let student="miss. gaddam keerthana";
        console.log(student.startsWith("miss."));
        console.log(student.endsWith("keerthana"));
        console.log(student.includes("gaddam"));

      }}>startsWith,endsWith,includes</button>
      <button onClick={()=>{
        console.log(msg.indexOf("courage"));
        console.log(msg.lastIndexOf("Dare"));
      }}>indexOf,lastIndexOf</button>
      <button onClick={()=>{
        let sai="shri. sairaam";
        console.log(sai.repeat(1000));
      }}>repeat</button>
      <button onClick={()=>{
        console.log(msg.indexOf("leads"));
        console.log(msg.search(/leads/i));
      }}>search</button>
      
    </div>
      
  );
}

export default App;
