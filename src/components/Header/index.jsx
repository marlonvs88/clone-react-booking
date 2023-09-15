import React, { useState } from 'react';
import * as C from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    
    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };


    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    return (
        <C.Header>
            <C.HeaderContainer isList={type === "list"}>
                <C.HeaderList>
                    <C.HeaderListItem active={true}>
                        <FontAwesomeIcon icon={faBed} />
                        <C.span>Stays</C.span>
                    </C.HeaderListItem>
                    <C.HeaderListItem>
                        <FontAwesomeIcon icon={faPlane} />
                        <C.span>Flights</C.span>
                    </C.HeaderListItem>
                    <C.HeaderListItem>
                        <FontAwesomeIcon icon={faCar} />
                        <C.span>Car rentals</C.span>
                    </C.HeaderListItem>
                    <C.HeaderListItem>
                        <FontAwesomeIcon icon={faBed} />
                        <C.span>Attractions</C.span>
                    </C.HeaderListItem>
                    <C.HeaderListItem>
                        <FontAwesomeIcon icon={faTaxi} />
                        <C.span>Airport taxis</C.span>
                    </C.HeaderListItem>
                </C.HeaderList>

                {type !== "list" &&
                    <>
                        <C.HeaderTitle>A lifetime of discounts? It's Genius.</C.HeaderTitle>
                        <C.HeaderDesc>Get rewarded for your travels -  unclok instant savings of 10% or more with a free react booking account</C.HeaderDesc>
                        <C.HeaderBtn>Sign in / Register</C.HeaderBtn>

                        <C.HeaderSearch>
                            <C.HeaderSearchItem>
                                <C.ColoredFontAwesomeIcon icon={faBed} />
                                <C.HeaderSearchInput placeholder='Where are you going' onChange={(e) => setDestination(e.target.value)}/>
                            </C.HeaderSearchItem>

                            <C.HeaderSearchItem>
                                <C.ColoredFontAwesomeIcon icon={faCalendarDays} />
                                <C.HeaderSearchInput onClick={() => setOpenDate(!openDate)} placeholder={` ${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} />
                                <C.Date>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                    />}
                                </C.Date>
                            </C.HeaderSearchItem>

                            <C.HeaderSearchItem>
                                <C.ColoredFontAwesomeIcon icon={faPerson} />
                                <C.HeaderSearchInput onClick={() => setOpenOptions(!openOptions)} placeholder={`${options.adult} adult . ${options.children} children . ${options.room} room`} />
                                {openOptions && <C.Options>
                                    <C.OptionItem>
                                        <C.OptionText> Adult </C.OptionText>
                                        <C.OptionCounter>
                                            <C.OptionCounterButton disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</C.OptionCounterButton>
                                            <C.OptionCounterNunber>{options.adult}</C.OptionCounterNunber>
                                            <C.OptionCounterButton onClick={() => handleOption("adult", "i")}>+</C.OptionCounterButton>
                                        </C.OptionCounter>
                                    </C.OptionItem>
                                    <C.OptionItem>
                                        <C.OptionText> Children </C.OptionText>
                                        <C.OptionCounter>
                                            <C.OptionCounterButton disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</C.OptionCounterButton>
                                            <C.OptionCounterNunber>{options.children}</C.OptionCounterNunber>
                                            <C.OptionCounterButton onClick={() => handleOption("children", "i")}>+</C.OptionCounterButton>
                                        </C.OptionCounter>
                                    </C.OptionItem>
                                    <C.OptionItem>
                                        <C.OptionText> Room </C.OptionText>
                                        <C.OptionCounter>
                                            <C.OptionCounterButton disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</C.OptionCounterButton>
                                            <C.OptionCounterNunber>{options.room}</C.OptionCounterNunber>
                                            <C.OptionCounterButton onClick={() => handleOption("room", "i")}>+</C.OptionCounterButton>
                                        </C.OptionCounter>
                                    </C.OptionItem>
                                </C.Options>}
                            </C.HeaderSearchItem>

                            <C.HeaderSearchItem>
                                <C.HeaderBtn onClick={handleSearch}>Search</C.HeaderBtn>
                            </C.HeaderSearchItem>
                        </C.HeaderSearch> </>}
                    </C.HeaderContainer> 
        </C.Header>
    )
}

export default Header