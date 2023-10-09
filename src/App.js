import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [items, Setitems] = useState([
    { id: 1, value: 0, itemname: "iPhone", price: 150 },
    { id: 2, value: 0, itemname: "iPad", price: 200 },
    { id: 3, value: 0, itemname: "iMac", price: 300 },
    { id: 4, value: 0, itemname: "iBook", price: 500 },
  ]);

  const item = (e) => {
    if (e.target.id === 'decrease') {
      e.preventDefault()
      const index = e.target.name;
      if (items[index - 1].value === 0) {

      } else {
        items[index - 1].value -= 1;
        const arr = [...items]
        Setitems(arr)
      }
    }

    if (e.target.id === 'increase') {
      e.preventDefault()
      const index = e.target.name;
      items[index - 1].value += 1;
      const arr = [...items]
      Setitems(arr)
    }
  }
  const [total, SetTotal] = useState(0);
  const reset = () => {
    // SetTotal(0)
    const arr = [...items]
    arr.map((val, idx) => {
      arr[idx].value = 0;
    })
    Setitems(arr)
  }
  useEffect(() => {
    let mock = 0
    const OldItems = [...items]
    OldItems.map((data) => {
      mock += data.price * data.value
      SetTotal(mock)
    })
  }, [items])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div>
          <div className='total'>
            <p>ราคารวม {total}</p>
            <div className='ressetbutton' onClick={reset}>Reset</div>
          </div>

          <form className='itemslist-conatainer'>

            {items.map((val) => {
              return (
                <div key={val.id} className='items-container '>
                  <div className='items-box'>
                    {val.itemname} Price: {val.price}
                    <input className='inputval' type='text' value={val.value} readOnly />
                    <div className='Actionsbutton'>
                      <button className='button' id='increase' name={val.id} onClick={item}>+</button>
                      <button className='button' id='decrease' name={val.id} onClick={item}>-</button>
                    </div>
                  </div>
                  <div className='total-items'>
                    <p>Total</p>
                    <p>{val.value * val.price}</p>
                  </div>
                </div>
              )
            })}
          </form>

        </div>
      </header>
    </div>);
}

export default App;
