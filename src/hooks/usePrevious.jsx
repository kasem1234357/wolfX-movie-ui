import { useRef } from "react";

export default function usePrevious(value,opt={
  isTheSameFn:null,
  isnotTheSame:null
}) {
  console.log(value);
  const currentRef = useRef(value);
  const previousRef = useRef();
  let result = value
  let isTheSame = true

  if (currentRef.current !== value) {
    opt.isnotTheSame && opt.isnotTheSame()
    isTheSame=false
    previousRef.current = currentRef.current;

    result = previousRef.current
    currentRef.current = value;

  }
  opt.isTheSameFn && opt.isTheSameFn()

  return {
    previousValue:result,
    isTheSame
  }
}
