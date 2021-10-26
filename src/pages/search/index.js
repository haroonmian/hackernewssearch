import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Container, Card, Pagination } from "react-bootstrap";
import Header from "../../components/header";
import * as actions from "../../store/actions";
import AppPagination from "./pagination";
import { Context } from "../../store";

const Search = () => {
  const [state, dispatch] = useContext(Context);
  const hits = state.searches ? state.searches.hits : [];

  const onPageChange = (page) => {
    (async () => {
      dispatch(actions.setLoading(true));
      dispatch(await actions.onSearch(page, state.keywords));
      dispatch(actions.setLoading(false));
    })();
  };

  return (
    <>
      <Header />
      <Container>
        <AppPagination
          onChange={onPageChange}
          nbPages={state.searches?.nbPages}
        />
        {hits.length
          ? hits.map((hint, index) => (
              <Row key={index} className="p-2">
                <Col>
                  <Card>
                    <Row className="p-3">
                      <h5><div dangerouslySetInnerHTML={{ __html: hint._highlightResult.title.value }}/></h5>
                      <a href={hint.url} dangerouslySetInnerHTML={{ __html: hint._highlightResult.url?.value }} />
                    </Row>
                    <Row className="p-2">
                      <Col className="text-end">
                        <div dangerouslySetInnerHTML={{ __html: hint._highlightResult.author.value }}/>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            ))
          : null}
      </Container>
    </>
  );
};

export default Search;
