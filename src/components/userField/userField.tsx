
type PropsType = {
  matchValue?: string;
  value: string;
}

export const UserField:React.FC<PropsType> = ({matchValue, value}) => {

  const f = () => {
    if(matchValue) {
    const matchValueIndex =   value.toLowerCase().indexOf(matchValue.toLowerCase());
    
    return (
      <>
      {value.substring(0, matchValueIndex)}
        <b>{value.substring(matchValueIndex, matchValueIndex + matchValue.length)}</b>
        {value.substring(matchValueIndex + matchValue.length)}
        </>
    )
  }
  
    return (
      <span>
        {f()}
      </span>
    )
  }

  
  return <span>{value}</span>
}