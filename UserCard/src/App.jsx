import './App.css'
import MainContainer from './component/MainContainer.jsx'
import Users from './component/UsersData.json'
function App() {
  return ( <>
    
    {Users.map((userObj)=>{
      return <MainContainer Url={userObj.Url} name={userObj.name} title={userObj.title}/>
    })}  
    </>
    
  )
}

export default App