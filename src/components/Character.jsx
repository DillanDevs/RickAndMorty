import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function Character({ character }) {
  const [dropdown, setDropdown] = useState(false);

  const open = () => {
    setDropdown(true);
  };

  const close = () => {
    setDropdown(false)
  }

  return (
    <div className="text-center p-5">
      <div className="py-4">
        <h3 className="py-2 text-center">{character.name}</h3>
        <img
          className="img-fluid rounded"
          src={character.image}
          alt={character.name}
        />
      </div>
      <Dropdown isOpen={dropdown} className="w-auto">
        <DropdownToggle onMouseEnter={open} onMouseLeave={close} caret className="px-4">Info</DropdownToggle>

        <DropdownMenu className="bg-primary bg-gradient">
          <DropdownItem header className="text-white">
            <p>Origin: {character.origin.name}</p>
          </DropdownItem>
          <DropdownItem header className="text-white">
            <p>Location: {character.location.name}</p>
          </DropdownItem>
          <DropdownItem header className="text-white">
            <p>Species: {character.species}</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Character;
