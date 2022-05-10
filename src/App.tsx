import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { Category } from './types/Category'
import { Item } from './types/Item'
import { categories } from './data/categories'
import { items } from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'



const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText><h1>Sistema Financeiro</h1></C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea currentMonth={currentMonth}  />

        {/* Area de inserção */}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default App;