import mainLogo from "../../assets/icons/mainLogo.svg";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import user from '../../assets/icons/user.svg'
import message from "../../assets/icons/message.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";

const HeaderTop = () => {
    
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
    <div className="container mx-auto">
      <div className="wrapper flex justify-between items-center py-6">
        <img src={mainLogo} alt="logo" />
        <form className="flex justify-between items-center border-2 border-[#0D6EFD] w-[600px] rounded-md">
          <input
            className="w-[400px] px-2 focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="line border-l-2 border-indigo-500 h-[43px] w-[1px] pl-2 "></div>
          <Dropdown
            
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a className="text-[16px]" onClick={(e) => e.preventDefault()}>
              <Space>
                All category
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <button className="ml-1 p-[10px] bg-[#0067FF] text-white focus:bg-[#488cf2fb]">
            Search
          </button>
        </form>
        <ul className="flex items-center gap-[23px]">
          <li>
            <img className="mb-[7px] mx-auto" src={user} alt="user" />
            <p>Profile</p>
          </li>
          <li>
            <img className="mb-[7px] mx-auto" src={message} alt="user" />
            <p>Message</p>
          </li>
          <li>
            <img className="mb-[7px] mx-auto" src={heart} alt="user" />
            <p>Orders</p>
          </li>
          <li>
            <img className="mb-[7px] mx-auto" src={cart} alt="user" />
            <p>My cart</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
