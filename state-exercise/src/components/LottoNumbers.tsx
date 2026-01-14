type Props = {
    setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  };
  
  const LottoNumbers = ({ setLottoNumbers }: Props) => {
    const generateNumbers = () => {
      const numbers: number[] = [];
  
      while (numbers.length < 7) {
        const random = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(random)) {
          numbers.push(random);
        }
      }
  
      setLottoNumbers(numbers);
    };
  
    return (
      <button onClick={generateNumbers}>
        Generate Lotto Numbers
      </button>
    );
  };
  
  export default LottoNumbers;
  