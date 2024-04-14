// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';

// function DropDown() {
//   return (
//     <>
//       <div className="mb-2">
//         {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
//           (direction) => (
//             <DropdownButton
//               as={ButtonGroup}
//               key={direction}
//               id={`dropdown-button-drop-${direction}`}
//               drop={direction}
//               variant="secondary"
//               title={` Drop ${direction} `}
//             >
//               <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//             </DropdownButton>
//           ),
//         )}
//       </div>

//       <div>
//         {['up', 'up-centered', 'down', 'down-centered', 'start', 'end'].map(
//           (direction) => (
//             <SplitButton
//               key={direction}
//               id={`dropdown-button-drop-${direction}`}
//               drop={direction}
//               variant="secondary"
//               title={`Drop ${direction}`}
//             >
//               <Dropdown.Item eventKey="1">Action</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
//             </SplitButton>
//           ),
//         )}
//       </div>
//     </>
//   );
// }

// export default DropDown;


import React from 'react';
import Select from 'react-select';

// Custom styles
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#fff',
        border: '7px solid #00668C',
        borderRadius: '4px',
        padding: '10px 15px',
        color: '#00668C',
        cursor: 'pointer',
        outline: 'none',
        // boxShadow: state.isFocused ? '0 0 5px rgba(0, 0, 0, 0.1)' : null,
    }),
    option: (provided, state) => ({
        ...provided,
        // backgroundColor: state.isSelected ? '#e0e0e0' : 'white',
        color: state.isSelected ? '#333' : '#555',
        cursor: 'pointer',
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: '#ffffff',
        // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }),
    singleValue: (provided) => ({
        ...provided,
        color: '#555',
    }),
};

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
];
const defaultOption = { value: 'one', label: 'One' };
const DropDown = () => {
    return (
        <div className="App">
            <Select
                options={options}
                styles={customStyles}
                // value={defaultOption}
            />
        </div>
    );
};

export default DropDown;
