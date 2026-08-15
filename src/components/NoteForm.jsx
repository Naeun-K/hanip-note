import React, { useEffect, useRef, useState } from "react";

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
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope-paper-heart"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
            />
          </svg>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cookie"
            viewBox="0 0 16 16"
          >
            <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z" />
          </svg> */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-diamond-half"
            viewBox="0 0 16 16"
          >
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 .989c.127 0 .253.049.35.145l6.516 6.516a.495.495 0 0 1 0 .7L8.35 14.866a.5.5 0 0 1-.35.145z" />
          </svg> */}
        </span>
        <div>
          <p>NEW NOTE</p>
          <h2>새 메모 남기기</h2>
        </div>
      </div>

      <label>
        <span>제목</span>
        <input
          ref={titleRef}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="기억할 개념을 적어보세요"
        />
      </label>
      <label>
        <span>내용</span>
        <textarea
          value={body}
          onChange={(event) => setBody(event.target.value)}
          rows="4"
          placeholder="배운 언어를 짧게 정리해보세요"
        />
      </label>
      <button type="submit">메모 추가</button>
    </form>
  );
}
