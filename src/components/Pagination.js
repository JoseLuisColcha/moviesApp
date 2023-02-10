import React from "react";

const Pagination = ({ page, total, onChange }) => {
  const getPages = () => {
    const result = [];

    for (let i = 0; i < total; i++) {
      let pagePag = i + 1;
      result.push(
        <a
          onClick={() => onChange(pagePag)}
          className={page === pagePag ? "active" : ""}
        >
          {i + 1}
        </a>
      );
    }
    return result;
  };

  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <div className="pagination2">
        <span>
          Page {page} of {total}:
        </span>
        {getPages()}
      </div>
    </div>
  );
};

export default Pagination;
