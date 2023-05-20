import { ProductListWithSearch, TodoListWithSearch } from './HighOrderComponent(HOC)/HOC'
import { TodoContainer } from './PresentationalContainer/TodoContainer'

import './App.css'




const App = () => {
 

  return (
    <div className='container'>
    <h1>React Design Patterns</h1>
    <h2>HOC</h2>
    <ProductListWithSearch/>
    
    <TodoListWithSearch/>
    
    <h2>Presentational & Container</h2>
    <TodoContainer/>
      
    </div>
  )
}

export default App
