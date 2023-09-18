import React, { useState } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import SearchItem from '../../components/SearchItem';
import * as C from './styles';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns'; // Importe a função format de date-fns
import { DateRange } from 'react-date-range';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination || '');
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
                            <C.LsSpan onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0]?.startDate, "dd/MM/yyyy")} to ${format(date[0]?.endDate, "dd/MM/yyyy")}`}
                            </C.LsSpan>
                            {openDate && (<DateRange onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date} />)}
                        </C.LsItem>
                        <C.LsItem>
                            <C.LsLabel>Options</C.LsLabel>
                            <C.Options>
                                <C.LsOptionItem>
                                    <C.LsOptionText>Min price <small>per night</small></C.LsOptionText>
                                    <C.LsOptionInput type='number' />
                                </C.LsOptionItem>
                                <C.LsOptionItem>
                                    <C.LsOptionText>Max price <small>per night</small></C.LsOptionText>
                                    <C.LsOptionInput type='number' />
                                </C.LsOptionItem>
                                <C.LsOptionItem>
                                    <C.LsOptionText>Adult </C.LsOptionText>
                                    <C.LsOptionInput type='number' min={1} placeholder={options.adult} />
                                </C.LsOptionItem>
                                <C.LsOptionItem>
                                    <C.LsOptionText>Children </C.LsOptionText>
                                    <C.LsOptionInput type='number' min={0} placeholder={options.children} />
                                </C.LsOptionItem>
                                <C.LsOptionItem>
                                    <C.LsOptionText>Room </C.LsOptionText>
                                    <C.LsOptionInput type='number' min={1} placeholder={options.room} />
                                </C.LsOptionItem>
                            </C.Options>
                            <C.Button>Search</C.Button>
                        </C.LsItem>
                    </C.ListSearch>
                    <C.ListResult>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </C.ListResult>
                </C.ListWrapper>
            </C.ListContainer>
        </div>
    );
};

export default List;
