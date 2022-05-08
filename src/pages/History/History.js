import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Contract</th>
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
