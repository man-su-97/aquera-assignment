const Pagination = ({ handlePageChange, hasPrev, hasNext }) => {
  return (
    <div className="pagination">
      <button onClick={() => handlePageChange("prev")} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={() => handlePageChange("next")} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
