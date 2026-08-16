import React from "react";
import { createPortal } from "react-dom";
import { ModalStyle } from "../styles/ModalStyle";

export default function DeleteModal({ onDelete, onClose }) {
  return createPortal(
    <ModalStyle onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-desc">
          <h2>메모 삭제</h2>
          <p>정말로 메모를 삭제하시겠습니까?</p>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="deco button-style cancel-btn"
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="button"
            className="deco button-style submit-btn"
            onClick={onDelete}
          >
            삭제
          </button>
        </div>
      </div>
    </ModalStyle>,
    document.querySelector("#modal-root"),
  );
}
