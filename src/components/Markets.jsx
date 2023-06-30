import React, { useState } from 'react';
import useAxios from '../hooks/useAxios';
import Coin from './Coin';
import Skeleton from './Skeleton';

const Markets = () => {
  const [search, setSearch] = useState('');
  const { response, loading } = useAxios(
    `coins/markets?vs_currency=usd&ids=${search}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

  const handleChange = e => {
    setSearch(e.target.value);
  };

  // if (loading) {
  //   return (
  //     <div className="wrapper-container mt-8">
  //       {/* Skeleton loading placeholders */}
  //     </div>
  //   );
  // }



  return (
    <section className="mt-8">
      <h1 className="text-4xl mb-2 font-bold text-yellow-600">Market</h1>
      <h3 className='text-sm mb-1 mt-1  '>Search a CryptoCurrency</h3>
      <div>
        <form className='id'>
        <input

          className="px-4 w-72 h-10 mb-10 rounded-md border-none bg-black text-white"
          type="text"
          placeholder="Enter a coin name"
          value={search}
          onChange={handleChange}
        />
        </form>
     </div>
      {response && response.map((coin) => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Markets;
