import './App.css';
import Player from './Player/player'



const content = [
  {
    title: "woiejfwoeifjwoeijf", 
    content: "wsb to the moon"
  },
  {
    title: "woiefjwoeifje",
    content: "diamond hands"
  }
]

function App() {
  
  const playRadio = () => {
    let synthesis;
    if('speechSynthesis' in window) {
      synthesis = window.speechSynthesis; 
    } else {
      console.log( "text to speech is not supported")
    }

    let posts = [...content] 
    posts.map( post => {
      debugger
      Object.entries(post).forEach((key,value) => {
        const x = new SpeechSynthesisUtterance(value);  
        synthesis.speak(x); 
      });
      
    })

  }

  const renderPostList = content.map( post => {
    return (
      <div> 
        <div>
          {post.title}
        </div>
        <div> 
          {post.content}
        </div>
      </div>
    )
  })

  return (
    <div className="App">
        WE LIKE THE STOCK! WE LIKE THE STOCK! 


        <header className="banner">
          {/* hamburger  */}
          <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20" rx="8"></rect>
              <rect y="30" width="100" height="20" rx="8"></rect>
              <rect y="60" width="100" height="20" rx="8"></rect>
          </svg>
          {/* logo */}
          <img src="../public/wsb-logo.jpg" alt="wsb-logo"/> 
          {/* patreon   */}
        </header>


        <main>

          {renderPostList}
          
        </main> 


        <footer> 
          <button onClick={playRadio}> 
            play button
          </button>
        </footer>
    </div>
  );
}

export default App;
