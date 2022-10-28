import { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Spinner from "react-bootstrap/Spinner";

function Account() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [orderOne, setOrderOne] = useState([]);
  const [orderTwo, setOrderTwo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://hook.eu1.make.com/b3hgr3jp02feki94fylq67lhvq479vyb?mail=test@test.com"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://hook.eu1.make.com/b3hgr3jp02feki94fylq67lhvq479vyb?order=0000"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOrderOne(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    fetch(
      "https://hook.eu1.make.com/b3hgr3jp02feki94fylq67lhvq479vyb?order=0001"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOrderTwo(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </>
    );
  } else {
    return (
      <div>
        <div>
          <h4>Пользователь</h4>
          {items.map((item) => (
            <ul>
              <ul>Name : {item.Name}</ul>
              <ul>Email: {item.Email}</ul>
              <ul>Phone: {item.Phone}</ul>
              <ul> Project: {item.Projects}</ul>
              <ul>clientID: {item.clientID}</ul>
              <ul>Orders: </ul>
              <ul>{item.Orders[0]}</ul>
              <ul> {item.Orders[1]}</ul>
            </ul>
          ))}
        </div>

        <div>
          <Tabs
            defaultActiveKey="0000"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="0000" title="Заказ 0000">
              {orderOne.map((order_One) => (
                <ul>
                  <ul>Pages: {order_One.Pages}</ul>
                  <ul>Total: {order_One.Total}</ul>
                  <ul>Status: {order_One.Status}</ul>
                  <ul> Subject: {order_One.Subject}</ul>
                  <ul>clientID: {order_One.ClientID}</ul>
                  <ul> Deadline: {order_One.Deadline}</ul>
                  <ul> Worktype:{order_One.Worktype}</ul>
                  <ul> startDate:{order_One.startDate}</ul>
                </ul>
              ))}
            </Tab>
            <Tab eventKey="0001" title="Заказ 0001">
              {orderTwo.map((order_Two) => (
                <ul>
                  <ul>Pages: {order_Two.Pages}</ul>
                  <ul>Total: {order_Two.Total}</ul>
                  <ul>Status: {order_Two.Status}</ul>
                  <ul> Subject: {order_Two.Subject}</ul>
                  <ul>clientID: {order_Two.ClientID}</ul>
                  <ul> Deadline: {order_Two.Deadline}</ul>
                  <ul> Worktype:{order_Two.Worktype}</ul>
                  <ul> startDate:{order_Two.startDate}</ul>
                </ul>
              ))}
            </Tab>
          </Tabs>
        </div>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Вернуться обратно
        </Button>
      </div>
    );
  }
}

export { Account };
