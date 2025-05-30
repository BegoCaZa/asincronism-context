import { useLocation } from 'react-router-dom';

const Country = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <span>{state.name.common}</span>
    </>
  );
};
export default Country;
