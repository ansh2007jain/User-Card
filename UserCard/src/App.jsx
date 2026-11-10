import './App.css'
import MainContainer from './component/MainContainer.jsx'

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <MainContainer Url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqhSUzBQ9KByyGopL11H1DrR_A2u6B5zhPtPzclDkFw&s=10' name='Lausi Ford' title='Data Manager'/>
      <MainContainer  Url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lMvqCyVL_tzQc1lsK-eykCC8gJhzZP2qOv2SFMWEoA&s=10' name='Priya Jain' title='AI Engineer'/>
      <MainContainer  Url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdfpQc7hg4mqkzHqlq-IKbi7AHPxwpC132W4shNbwnQ&s=10' name='Ansh Jain ' title='Pyton Developer'/>
    </div>
  )
}

export default App