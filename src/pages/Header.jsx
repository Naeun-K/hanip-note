import React from "react";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const handleClick = (strUrl) => {
    navigate(strUrl);
  };
  return (
    <div>
      <nav>
        <button onClick={() => handleClick("/")}>홈</button>
        <button onClick={() => handleClick("/memos")}>메모장</button>
        <button onClick={() => handleClick("/new")}>새 메모</button>
      </nav>
      <button>theme</button>
    </div>
  );
}
