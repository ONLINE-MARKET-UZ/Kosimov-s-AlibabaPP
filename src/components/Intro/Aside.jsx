import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div>
      <aside>
        <ul>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">Automobiles</Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">Clothes and wear</Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">Home interiors</Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">
              Computer and tech
            </Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">
              Tools, equipments
            </Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">
              Sports and outdoor
            </Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">Animal and pets</Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">Machinery tools</Link>
          </li>
          <li className="p-[10px] hover:bg-[#E5F1FF] hover:rounded-md  duration-200">
            <Link className="text-[#505050] text-[16px] hover:text-[#1C1C1C]">More category</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
