import React from "react";
import {
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import LogoImage from "../assets/Graphics/header-logo.png";
import { CiHeart,CiSearch } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';

function Topbar() {
  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <div>
          {/* Logo */}
          <img src={LogoImage} alt="logo" className="logo" style={{ height: '50px', width: 'auto', marginRight:'40px',marginLeft:'-60px' }}/>
        </div>
        <div >
          {/* Search bar */}
          <InputGroup>
            <DropdownButton variant="outline-secondary" title="All Categories">
              <Dropdown.Item>All Categories</Dropdown.Item>
              <Dropdown.Item>Computer & PC</Dropdown.Item>
              <Dropdown.Item>Smart Gadgets</Dropdown.Item>
              <Dropdown.Item>TV & Monitors</Dropdown.Item>
              <Dropdown.Item>Wearable Items</Dropdown.Item>
            </DropdownButton>
            <FormControl placeholder="Search" aria-label="Search" style={{ width: '550px' }} />
            <Button className="text-light bg-dark"variant="outline-secondary" style={{ width: '50px' }} ><CiSearch size={25}/></Button>
          </InputGroup>
        </div>
        <div style={{ marginLeft: '150px' ,marginRight:'-100px'}}>
          <CiHeart size={30}/>
          <button className="btn btn-light"><GrUserExpert/>Sign in</button>
          <button className="btn rounded-pill btn-lg" style={{backgroundColor: '#ffc423'}}><BsCart4 style={{color: '#1c1c1c'}}/>  Cart  $0.0</button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
