import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const FormStyle = styled.form(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .form-heading": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  "& .form-heading-wrpper": {
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "flex-end",
    color: theme.colors.body,
    lineHeight: 1.75,
  },
  " & .form-desc": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  "& h2": {
    margin: 0,
    color: theme.colors.text,
    fontSize: "2rem",
    letterSpacing: "-0.025em",
  },
  "& .form-desc-style": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "start",
  },
  "& .input-label": {
    fontSize: "1.15rem",
  },
  "& .deco": {
    margin: "0px",
    width: "100%",
    borderRadius: theme.radius.control,
    padding: "8px 15px",
    fontSize: "1.2rem",
    border: `1px solid ${theme.colors.border}`,
    boxSizing: "border-box",
  },
  "& .input-style": {
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
  },
  "& .input-style:focus": {
    border: "0.8px solid #fcc7fe",
    boxShadow: "0 0 0 3px rgba(249, 125, 253, 0.4)",
  },
  "& .button-style": {
    cursor: "pointer",
    backgroundColor: "#fcf1f5",
    transition: "background-color 0.5s, transform 0.5s",
  },
  "& .button-style:hover": {
    backgroundColor: "#fcc7fe",
    transform: "translateY(-5px)",
  },
}));

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current?.focus();
    const timer = setTimeout(() => {
      titleRef.current?.focus();
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newNote = {
      id: crypto.randomUUID(),
      title: title.trim(),
      body: body.trim(),
      pinned: false,
    };

    onAdd(newNote);
    setTitle("");
    setBody("");
    titleRef.current?.focus();
  }

  return (
    <FormStyle className="note-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <div className="form-heading-wrpper">
          <span aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-envelope-paper-heart"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
              />
            </svg>
          </span>
          <span>NEW NOTE</span>
        </div>
        <h2>새 메모 남기기</h2>
      </div>
      <div className="form-desc">
        <label className="form-desc-style">
          <span className="input-label">제목</span>
          <input
            className="deco input-style"
            ref={titleRef}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="기억할 개념을 적어보세요"
          />
        </label>
        <label className="form-desc-style">
          <span className="input-label">내용</span>
          <textarea
            className="deco input-style"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows="4"
            placeholder="배운 언어를 짧게 정리해보세요"
          />
        </label>
        <button type="submit" className="deco button-style">
          메모 추가
        </button>
      </div>
    </FormStyle>
  );
}
