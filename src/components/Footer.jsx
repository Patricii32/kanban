import React from "react";

export default function Footer({ activeTasks, finishedTasks }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <p>Активные задачи: {activeTasks}</p>
          <p>Завершенные задачи: {finishedTasks}</p>
        </div>
        <div className="footer-right">Kanban board by Patricii, 2024</div>
      </div>
    </footer>
  );
}
