import {useState} from 'react'
const useMultiSelect = ()=>{
    const [selectors, setSelectors] = useState([]);
    
    /**
     * @desc This function using to find an item inside selectors.
     * TODO: this function will return the index of item of found else will return `-1`
     * @param { any } item
     * @return { number }
     */
    const searchForItem = (item)=> {
      let index = -1;
      if(typeof item === 'object'){
        selectors.some((el,indexEl )=>{
          const keys1 = Object.keys(item);
  const keys2 = Object.keys(el);

  if (keys1.length !== keys2.length) {
    return false;
  }
  else{
    for (let key of keys1) {
      if (el[key] !== item[key]) {
        return false;
      }
      else {
        index = indexEl
        console.log('hi');
        
        return true
      }
    }

  }

        })
      }
      else{
        index = selectors.indexOf(item);
      }
      return index;
    }
  
    /**
     * @desc This function using to add new item to selectors
     * @param { any } item
     * @return { void }
     */
    const addItem = (item) => {
      console.log(searchForItem(item ));
      
          searchForItem(item ) <0 && setSelectors(prev => [...prev,item])
    }
  
    /**
     * @desc This function using to remove an item from selectors array
     * @param { any } item
     * @return { void }
     */
    const removeItem = (item)=> {
      const isset = searchForItem(item);
      isset >= 0 && setSelectors((prev) => prev.filter((_selector, index) => index !== isset));
    }
  
    /**
     * @desc This function using to set a array of items.
     * @param { Array<any> } items
     * @return { void }
     */
    const addArrayItems = (items)=> {
      items.forEach(item => {
        addItem(item);
      });
    }
  
    return {
      selectors,
      addItem,
      removeItem,
      searchForItem,
      setSelectors,
      addArrayItems
    }
}

export default useMultiSelect