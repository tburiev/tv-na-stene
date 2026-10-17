import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary";

// Обработка ошибок при загрузке
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

try {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 20px; font-family: system-ui;">
      <h1>Ошибка загрузки</h1>
      <p>Не удалось загрузить приложение. Пожалуйста, обновите страницу.</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; cursor: pointer;">
        Обновить страницу
      </button>
    </div>
  `;
}
