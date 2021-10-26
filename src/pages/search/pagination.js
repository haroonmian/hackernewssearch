import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

const AppPagination = (props) => {
  const [currentTab, setCurrentTab] = useState(1);
  const [paginationItem, setPaginationItem] = useState([]);
    console.log(props.nbPages)
  useEffect(() => {
      let newPagination = [];
      let startPagination = Math.floor(currentTab / 7) * 7 + 1;
      let endPagination = startPagination + 7;
      for (
        let number = startPagination;
        number <= props.nbPages;
        number++
      ) {
        if (number == startPagination) {
          newPagination = [
            <Pagination.Item
              key={number}
              tabIndex={number}
              onClick={(e) => onPaginationChange(e.target.tabIndex)}
              active={number === Number(currentTab)}
            >
              {number}
            </Pagination.Item>,
          ];
        } else if (number < endPagination) {
          newPagination.push(
            <Pagination.Item
              key={number}
              tabIndex={number}
              onClick={(e) => onPaginationChange(e.target.tabIndex)}
              active={number === Number(currentTab)}
            >
              {number}
            </Pagination.Item>
          );
        } else {
          newPagination.push(<Pagination.Ellipsis key={number} />);
          newPagination.push(
            <Pagination.Item key={number + 1}>
              {props.nbPages}
            </Pagination.Item>
          );
          break;
        }
      }
      setPaginationItem(newPagination);
  }, [currentTab, props.nbPages]);

  const onPaginationChange = (page) => {
    if (props.onChange && props.nbPages) {
      props.onChange(page - 1);
    }
    setCurrentTab(page);
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => onPaginationChange(1)} />
      <Pagination.Prev onClick={() => onPaginationChange(currentTab > 1 ? currentTab - 1 : 1)} />
      <Pagination>{paginationItem}</Pagination>
      <Pagination.Next onClick={() => onPaginationChange(currentTab < props.nbPages ? currentTab + 1 : props.nbPages)} />
      <Pagination.Last onClick={() => onPaginationChange(props.nbPages)} />
    </Pagination>
  );
};

export default AppPagination;
