import { ProductListWithSearch, TodoListWithSearch } from './HighOrderComponent(HOC)/HOC'
import { TodoContainer } from './PresentationalContainer/TodoContainer'

import './App.css'
import { Store } from './Provider/Store/Store'
import { TodosView } from './Provider/TodosView/TodosView'




const App = () => {
 

  return (
    <div className='container'>
    <h1>React Design Patterns</h1>
    <h2>HOC</h2>
    <ProductListWithSearch/>
    
    <TodoListWithSearch/>
    
    <h2>Presentational & Container</h2>
    <TodoContainer/>
    
    <h2>Provider</h2>

    <Store>
      <TodosView/>
    </Store>


    </div>
  )
}

export default App
