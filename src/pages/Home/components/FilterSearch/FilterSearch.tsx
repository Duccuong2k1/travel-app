import React from 'react'
import { ButtonSreach, Input } from '../../../../components';
import './FilterSearch.scss';


export const FilterSearch = () => {
    return (
        <div className="filter-search">
            <form className="filter-search__wrapper">
                <div className="filter-search__wrapper-box-input">
                    <Input name="Where" type="text" placeholder="center point" id="place"/>

                </div>
                <div className="filter-search__wrapper-box-input">
                    <Input name="Date" type="date" placeholder="please enter date" id="date"/>
                </div>
                <div className="filter-search__wrapper-box-input">
                    <Input name="Guests" type="number" placeholder="please enter guest number" id="guguests"/>
                </div>
                <ButtonSreach name="Search Plan"/>
            </form>
        </div>
    )
}
