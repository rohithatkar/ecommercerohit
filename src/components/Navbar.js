import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown, InputGroup } from "react-bootstrap";
import { FaGripLines } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{height:'30px'}}>
            <li className="nav-item" style={{backgroundColor:'black', marginTop:'-8px', marginBottom:'-8px'}}>
              <InputGroup>
                <DropdownButton variant="outline-dark text-light" title={<span><FaGripLines /> Departments</span>}>
                  <Link className="nav-link" to="/computer">
                    <Dropdown.Item>Computer & PC</Dropdown.Item>
                  </Link>
                  <Link className="nav-link" to="/smart_gadgets">
                    <Dropdown.Item>Smart Gadgets</Dropdown.Item>
                  </Link>
                  <Link className="nav-link" to="/tv_monitors">
                    <Dropdown.Item>TV & Monitors</Dropdown.Item>
                  </Link>
                  <Link className="nav-link" to="/wearable_items">
                    <Dropdown.Item>Wearable Items</Dropdown.Item>
                  </Link>
                </DropdownButton>
              </InputGroup>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/track-order">
                Track Order
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
