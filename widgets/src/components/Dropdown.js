import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [opened, setOpened] = useState(false);
  const ref = useRef();

  // Closing the dropdown when a user clicks outside the dropdown,
  // or some value from the dropdown is selected.
  // Adding a simple event listener doesn't work because there are 3 in total:
  // body, dropdown, item.
  // Event listeners that are setup manually (through .addEventListener get called first).
  // Only afterwars React event listeners get called, from the child to the parent
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpened(false);
    };
    document.body.addEventListener("click", onBodyClick);

    // Event listener gets removed when the component is about to be removed
    // from the DOM
    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        onClick={() => onSelectedChange(option)}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${opened ? "visible active" : ""}`}
          onClick={() => setOpened(!opened)}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${opened ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
