import React, { useState } from 'react'; // ✅ include useState
import './Header.css';
import Navbar from './Navbar';
import { GrLocation } from "react-icons/gr";
import { BiUserVoice } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { Slider } from "@mui/material";

function Header() {
  const [salaryRange, setSalaryRange] = useState([50000, 80000]);

  const handleSalaryChange = (event, newValue) => {
    setSalaryRange(newValue);
  };

  return (
    <div className="header">
      <Navbar />
      <div className="filters-container">
        {/* Search Input */}
        <div className="filter-item">
          <IoSearchOutline className="icon" />
          <input
            type="text"
            placeholder="Search By Job Title, Role"
            className="input"
          />
        </div>

        {/* Preferred Location */}
        <div className="filter-item">
          <GrLocation className="icon" />
          <select className="select">
            <option>Preferred Location</option>
            <option>Remote</option>
            <option>Bangalore</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
          </select>
        </div>

        {/* Job Type */}
        <div className="filter-item">
          <BiUserVoice className="icon" />
          <select className="select">
            <option>Job type</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
            <option>Contract</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="filter-item no-border salary-range">
          <div className="salary-header">
            <span>Salary Per Month</span>
            <span>
              ₹{(salaryRange[0] / 1000).toFixed(0)}k - ₹
              {(salaryRange[1] / 1000).toFixed(0)}k
            </span>
          </div>
          <Slider
              value={salaryRange}
              onChange={handleSalaryChange}
              valueLabelDisplay="off"
              min={0}
              max={200000}
              step={5000}
              sx={{
                color: "#222222",
                height: 4, // ✅ thinner track
                '& .MuiSlider-thumb': {
                  height: 15,
                  width: 15,
                  border: '5px solid black', // ✅ hollow center effect
                  backgroundColor: 'white',
                  boxShadow: 'none',
                  '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                  },
                },
                '& .MuiSlider-track': {
                  height: 2,
                  borderRadius: 2,
                },
                '& .MuiSlider-rail': {
                  height: 2,
                  borderRadius: 2,
                },
              }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
