import React from 'react';
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import hamburger from '../../assets/icons/hamburger.svg'
import german from "../../assets/icons/german.svg";

const Navbar = () => {

 const items = [
   {
     label: <a href="#">1st menu item</a>,
     key: "0",
   },
   {
     label: <a href="#">2nd menu item</a>,
     key: "1",
   },
   {
     type: "divider",
   },
   {
     label: "3rd menu item",
     key: "3",
   },
 ];



  return (
    <div className="border-t-[1px] border-[#E0E0E0] border-b-[1px]">
      <div className="container mx-auto">
        <div className="wrapper flex justify-between items-center py-5 ">
          <ul className="flex items-center gap-x-7">
            <li className="flex items-center">
              <img src={hamburger} alt="logo" />
              <p className="text-[16px] leading-[22px] ml-[6px]">
                All category
              </p>
            </li>
            <li>Hot offers</li>
            <li>Gift boxes</li>
            <li>Projects</li>
            <li>Menu item</li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a className="text-[16px]" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Help
                    <DownOutlined
                      style={{ fontSize: "18px", color: "#8B96A5" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
          <ul className="flex items-center gap-x-8">
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a className="text-[16px]" onClick={(e) => e.preventDefault()}>
                  <Space>
                    English, USD
                    <DownOutlined
                      style={{ fontSize: "18px", color: "#8B96A5" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a className="text-[16px]" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Ship to <img src={german} alt="flag" />
                    <DownOutlined
                      style={{ fontSize: "18px", color: "#8B96A5" }}
                    />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;