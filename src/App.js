import logo from './logo.svg';
import './App.css';




const content = [
  {
    title: "woiejfwoeifjwoeijf", 
    content: "woiejfwoeifjwoief"
  },
  {
    title: "woiefjwoeifje",
    content: "woiejfoweifjwoeifj"
  }
]

function App() {
  
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

          {/* logo */}
          <img /> 
          {/* patreon   */}
        </header>


        <main>

          {renderPostList}
          
        </main> 


    </div>
  );
}

export default App;
