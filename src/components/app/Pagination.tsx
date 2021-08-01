import { PaginationNumber } from "defaults/types";
import { FormEvent, ReactChild, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 0;
  margin: 0.5rem 0;
  overflow-x: scroll;
`;

const PageNumberContainer = styled.div`
  flex: 1 1 80%;
  display: flex;
  justify-content: space-between;
`;

const PageNumber = styled.span`
  display: block;
  padding: 0.3rem 1rem;
`;

const PageSize = styled.select`
  flex: 0 1 30px;
  border: 1px solid #3e3e3e;
  border-radius: 3px;
`;

const sizes = [10, 20, 30, 50];

type Props = {
  onChangePagination: ({ page, size }: PaginationNumber) => void;
  totals: number;
};

const Pagination = ({ onChangePagination, totals }: Props) => {
  const [size, setSize] = useState(sizes[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState<number>(1);
  useEffect(() => {
    if (totals > 0) {
      const pageCount = Math.ceil(totals / size);
      setPages(pageCount);
    }
  }, [totals, size]);
  useEffect(() => {
    if (onChangePagination) {
      onChangePagination({ page: currentPage - 1, size });
    }
  }, [currentPage, size, onChangePagination]);
  const handleChangeSize = (e: FormEvent<HTMLSelectElement>) => {
    const currentSize = Number.parseInt(e.currentTarget.value, 10);
    setCurrentPage(1);
    setSize(currentSize);
  };
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  let pageNumbers: ReactChild[] = [];
  if (pages > 0) {
    for (let pageIndex = 0; pageIndex < pages; pageIndex++) {
      pageNumbers.push(
        <PageNumber
          key={`page-number-${pageIndex}`}
          onClick={() => handleChangePage(pageIndex + 1)}
        >
          {pageIndex + 1}
        </PageNumber>
      );
    }
  }
  return (
    <Container>
      <PageNumberContainer>
        {pageNumbers}
        <PageSize onChange={handleChangeSize} value={size}>
          {sizes.map((size) => (
            <option key={`option-size-${size}`} value={size}>
              {size}
            </option>
          ))}
        </PageSize>
      </PageNumberContainer>
    </Container>
  );
};

export default Pagination;
