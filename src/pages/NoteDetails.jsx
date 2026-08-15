import { Link, useParams } from "react-router";

export default function NoteDetails({ notes }) {
  const { noteId } = useParams();
  const note = notes.find((item) => String(item.id) === noteId);

  if (!note) {
    return (
      <main className="'note-detail empty-detail">
        <span aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heartbreak"
            viewBox="0 0 16 16"
          >
            <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z" />
          </svg>
        </span>
        <h1>메모를 찾을 수 없습니다</h1>
        <Link to="/">목록으로 돌아가기</Link>
      </main>
    );
  }
  return (
    <main className="note-detail">
      <Link to="/" className="back-link">
        ← 목록으로
      </Link>
      <article>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search-heart"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
            <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
          </svg>
          <span className="detail-sticker">NOTE</span>
        </div>
        <h1>{note.title}</h1>
        <p>{note.body}</p>
      </article>
    </main>
  );
}
