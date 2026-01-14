type Props = {
    setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  const LightToggle = ({ setIsLightsOn }: Props) => {
    const handleToggle = () => {
      setIsLightsOn(prev => !prev);
    };
  
    return (
      <button onClick={handleToggle}>
        Toggle Lights
      </button>
    );
  };
  
  export default LightToggle;
  