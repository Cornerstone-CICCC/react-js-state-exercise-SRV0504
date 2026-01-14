type Props = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
  
  const ClickCounter = ({ setCount }: Props) => {
    const handleClick = () => {
      setCount(prev => prev + 1);
    };
  
    return (
      <button onClick={handleClick}>
        Click Counter
      </button>
    );
  };
  
  export default ClickCounter;
  