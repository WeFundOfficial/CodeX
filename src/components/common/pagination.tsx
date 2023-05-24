import { ReactNode, useEffect, useMemo, useState } from "react";

enum ButtonType {
  Normal,
  Active,
  InActive,
}

interface Props {
  total?: number;
  countPerPage?: number;
  onChangePage: (start: number, count: number) => void;
}
const Pagination: React.FC<Props> = ({ total = 0, countPerPage = 10, onChangePage }) => {
  const max = 5;
  const [current, setCurrent] = useState(1);
  const totalPage = Math.ceil(total / countPerPage);

  useEffect(() => {
    setCurrent(1)
  }, [total]);

  useEffect(() => {
    const start = (current - 1) * countPerPage;
    const count = Math.min(countPerPage, total - start);
    onChangePage(start, count)
  }, [current, total]);

  const nextPage = () => {
    if (current + 1 <= totalPage)
      setCurrent(current + 1)
  }
  const prevPage = () => {
    if (current > 1)
      setCurrent(current - 1);
  }
  const nextBulk = () => {
    const isLast = totalPage - current + 1 <= max;
    if (!isLast)
      setCurrent(Math.floor((current + max - 1) / max) * max + 1);
  }
  const prevBulk = () => {
    if (current > max)
      setCurrent(Math.floor((current - max - 1) / max) * max + 1);
  }

  const start = Math.floor((current - 1) / max) * max + 1;
  const isLast = totalPage - start + 1 <= max;
  const count = isLast ? totalPage - start + 1 : max;

  return (
    <div className="flex justify-center w-full gap-6">
      <PageButton onClick={() => prevBulk()}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5898 12L13.9998 10.59L9.41984 6L13.9998 1.41L12.5898 0L6.58984 6L12.5898 12Z" fill="white" />
          <path d="M6 12L7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12Z" fill="white" />
        </svg>
      </PageButton>
      <PageButton onClick={() => prevPage()}>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="white" />
        </svg>
      </PageButton>
      {Array(count).fill(null).map((_, i) => (
        <PageButton type={start + i == current ? ButtonType.Active : undefined} key={i}
          onClick={() => setCurrent(start + i)}
        >
          <span className="text-base !leading-none pb-1">
            {start + i}
          </span>
        </PageButton>
      ))}
      {!isLast && <span>...</span>}
      <PageButton onClick={() => nextPage()}>
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.59 10.59L5.17 6L0.59 1.41L2 0L8 6L2 12L0.59 10.59Z" fill="white" />
        </svg>
      </PageButton>
      <PageButton onClick={() => nextBulk()}>
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.41016 12L0.000156403 10.59L4.58016 6L0.000156403 1.41L1.41016 0L7.41016 6L1.41016 12Z" fill="white" />
          <path d="M8 12L6.59 10.59L11.17 6L6.59 1.41L8 0L14 6L8 12Z" fill="white" />
        </svg>
      </PageButton>
    </div>
  )
};


interface PageButtonProps {
  type?: ButtonType;
  children: ReactNode;
  [x: string | number | symbol]: unknown;
}

const PageButton: React.FC<PageButtonProps> = ({ children, type = ButtonType.Normal, ...props }) => {
  const color = useMemo(() => {
    switch (type) {
      case ButtonType.Normal: return "white";
      case ButtonType.Active: return "#009DFF";
      case ButtonType.InActive: return "#FFFFFF88";
    }
    return "white"
  }, [type]);

  return (
    <div className={`flex justify-center items-center w-6 h-6 rounded-lg cursor-pointer border border-[${color}] text-[${color}]`}
      style={{ minWidth: "24px", minHeight: "24px", borderColor: color }}
      {...props}
    >
      {children}
    </div>
  )
}
export default Pagination;