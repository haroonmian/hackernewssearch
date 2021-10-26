import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import Header from "../../components/header";
import { Context } from "../../store";
import * as actions from "../../store/actions"

const History = () => {
  const [state, dispatch] = useContext(Context);
  const history = useHistory();
  const histories = state.history;

  const onHistoryClick = async () => {
    dispatch(actions.setLoading(true));
    dispatch(await actions.onSearch(1, state.keywords));
    dispatch(actions.setLoading(false));
    dispatch(actions.setHistory());
    history.push("/search");
  };

  return (
    <>
      <Header />
      <Container>
        {histories.length
          ? histories.map((history, index) => (
              <Row onClick={() => onHistoryClick()} key={index} className="p-2">
                <Col>
                  <Card>
                    <Row className="p-3">
                      <Col>{history.keywords}</Col>
                      <Col>{history.createdAt.toString()}</Col>
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

export default History;
