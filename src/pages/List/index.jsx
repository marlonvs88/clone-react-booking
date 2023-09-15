import React, { useState } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import * as C from './styles';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Importe a função format de date-fns

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination || ''); // Use o operador de coalescência nula para evitar erros se location.state for undefined
  const [date, setDate] = useState(location.state?.date || []);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options || []);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <C.ListContainer>
        <C.ListWrapper>
          <C.ListSearch>
            <C.LsTitle>Search</C.LsTitle>
            <C.LsItem>
              <C.LsLabel>Destination</C.LsLabel>
              <C.LsInput value={destination} onChange={(e) => setDestination(e.target.value)} />
            </C.LsItem>
            <C.LsItem>
              <C.LsLabel>Check-in Date</C.LsLabel>
              <C.LsSpan>
                {`${format(date[0]?.startDate, "MM/dd/yyyy")} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}
              </C.LsSpan>
            </C.LsItem>
          </C.ListSearch>
          <C.ListResult></C.ListResult>
        </C.ListWrapper>
      </C.ListContainer>
    </div>
  );
};

export default List;
