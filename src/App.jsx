import Avatar from "./Avatar"
import './App.css'

const lists = [{
  id : 1,
  firstName: "Homer",
  lastName : "SIMPSON",
  image : "https://www.stickees.com/files/cartoon/the-simpsons/2245-homer-simpson-donut.png"
},{
  id : 2,
  firstName: "Bart",
  lastName : "SIMPSON",
  image : "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png"
}]


function App(){
  
  return (
    <>
      <div>
        {
          lists.map((simp) => {
          return <Avatar key={simp.id} images={simp.image} firstName={simp.firstName} lastName={simp.lastName} />}
        )}
      </div>
    </>
    
  )
}

export default App;

