import { useRef } from "react"

const usePreferreLanguage = ()=>{
  let lang = useRef()
  if(navigator.language ){
    lang.current = navigator.language
  }
  
  
  return {lang:lang.current}
}
export default usePreferreLanguage