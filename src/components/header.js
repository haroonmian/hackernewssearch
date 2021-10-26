import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import * as actions from "../store/actions";
import { Context } from "../store";
import { Link } from "react-router-dom";

const Header = () => {
  const [state, dispatch] = useContext(Context);

  const onSearch = async () => {
    dispatch(actions.setLoading(true))
    dispatch(
      await actions.onSearch(
        state.currentPagination,
        state.keywords
      )
    )
    dispatch(actions.setLoading(false))
    dispatch(actions.setHistory());
  }

  console.log(state)

  return (
    <Container className="p-2">
      <Row>
        <Col>
          <Link className="p-2" style={{ textDecoration: 'none' }} to="/search">Search</Link>
          <Link className="p-2" style={{ textDecoration: 'none' }} to="/history">History</Link>
        </Col>
        <Col md="auto">
          <InputGroup>
            <FormControl
              onChange={(e) => dispatch(actions.setKeywords(e.target.value))}
              value={state.keywords}
              placeholder="Search..."
              aria-label="Search"
            />
            <Button onClick={() => onSearch()}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
