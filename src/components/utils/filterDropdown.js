import{IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {useState} from 'react';

const FilterDropdown = (props)=>{

    const [dropped, setDropped] = useState(false)

    const handleFilterSelect = (filter, type)=>{
        console.log(filter)
        return props.handleFilterSelect(filter, type)
    }


    return(
        <div className="dropdown-container" onClick={()=>setDropped(!dropped)}>
            <div className="dropdown-section-1">
                <div className="filter-dropdown-heading">{props.filter.name}</div>
                <div className="filter-dropdown-icon">{dropped?<IoIosArrowUp style={{fontSize:'24px'}} />:<IoIosArrowDown style={{fontSize:'24px'}} />}</div>
            </div>
            {dropped && <div className="dropdown-section-2">
                <div className="filter-dropdown-types-container">
                    {props.filter.types.map((type, i)=><div onClick={()=>handleFilterSelect(props.filter, type)} key={i} className="filter-dropdown-type">{type}</div>)}
                </div>
            </div>}
            
        </div>
    )
}

export default FilterDropdown;