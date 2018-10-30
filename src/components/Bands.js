import React from 'react';

 const Bands = ({bands}) => {
   const bandList = bands.map(band => <li key={band.name}>{band.name}</li>)
   return (
    <ul>
      {bandList}
    </ul>
  );
 };
 export default Bands;
