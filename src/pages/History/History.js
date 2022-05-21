import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import MyNav from "../../components/MyNav/MyNav";
import { cookieParser } from "../../utils/functions";
import { getHistoryFetch } from "../../utils/services";

export default function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    getHistoryFetch().then((res) => {
      setHistory(res);
    });
  }, []);
  return (
    <div>
      <MyNav />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Contract</th>
            <th>Probablity</th>
            <th>Amount</th>
            <th>Trade Currency</th>
          </tr>
        </thead>
        <tbody>
        {history.map((item, index) => {
          return (
              <tr>
                <td>{index+1}</td>
                <td>{item.status}</td>
                <td>{item.contractType}</td>
                <td>{item.bet}</td>
                <td>{item.amount} USDT</td>
                <td>{item.currency}</td>
              </tr>
          );
        })}
        </tbody>
      </Table>
    </div>
  );
}
