function TabButton({ num, activeTab, onClick }) {
  return (
    <div>
      <button
        className={activeTab === num ? "active" : "tab-button"}
        onClick={() => onClick(num)}
      >
        Point {num + 1}
      </button>
    </div>
  );
}

export default TabButton;
