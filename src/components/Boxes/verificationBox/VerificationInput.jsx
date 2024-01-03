import { useEffect, useRef } from "react";

function VerificationInput({ inputIndex, currentIndex, setCurrentIndex ,setValue,code }) {
    const inputRef = useRef(null);
  
    const handleInputChange = (event) => {
      const { value } = event.target;
         if(value >=0 && value){
             setValue(prev =>{
                prev[inputIndex]=value
                return prev
             })
         }
      if (value && inputIndex < 5) {
        // Move focus to the next input
        inputRef.current.blur(); // Blur the current input
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
      console.log(code);
    };
    useEffect(()=>{
      if(inputRef){
        inputIndex === currentIndex &&inputRef.current.focus()
      }
    },[currentIndex])
    return (
      <div className='verfiy-box flex-items fill  padding'>
        <input
          ref={inputRef}
          type='number'
          name=''
          id=''
          maxLength='1'
          width={'100%'}
          onChange={handleInputChange}
        />
      </div>
    );
  }
  
  export default VerificationInput;