import React from "react";
import { Table } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import "./customTable.css";

export const CustomTable = (props) => {
  const defaultLanguage = useSelector((state) => state.language.defaultLanguage);
  const theme = useSelector((state) => state.theme.defaultTheme);

  return (
    <div className={`overflow-hidden shadow`} style={{ borderRadius: 10, backgroundColor: theme.cardColor }}>
      <Table hover striped={theme.lightTheme ? false : true} borderless responsive className="p-0 m-0 text-center" style={{ color: theme.tableTextColor }}>
        <thead>
          <tr>
            <th>{defaultLanguage.firstName}</th>
            <th>{defaultLanguage.lastName}</th>
            <th>{defaultLanguage.username}</th>
            <th>{defaultLanguage.details}</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${theme.lightTheme ? "border-top" : ""}`}>
            <td style={{ color: theme.tableTextColor }}>Mark</td>
            <td style={{ color: theme.tableTextColor }}>Otto</td>
            <td style={{ color: theme.tableTextColor }}>@mdo</td>
            <td style={{ color: theme.tableTextColor }}>
              <AiOutlineMenu style={{ cursor: "pointer" }} color='#ef3121' />
            </td>
          </tr>
          <tr className={`${theme.lightTheme ? "border-top" : ""}`}>
            <td style={{ color: theme.tableTextColor }}>Mark</td>
            <td style={{ color: theme.tableTextColor }}>Otto</td>
            <td style={{ color: theme.tableTextColor }}>@mdo</td>
            <td style={{ color: theme.tableTextColor }}>
              <AiOutlineMenu style={{ cursor: "pointer" }} color='#ef3121' />
            </td>
          </tr>
          <tr className={`${theme.lightTheme ? "border-top" : ""}`}>
            <td style={{ color: theme.tableTextColor }}>Mark</td>
            <td style={{ color: theme.tableTextColor }}>Otto</td>
            <td style={{ color: theme.tableTextColor }}>@mdo</td>
            <td style={{ color: theme.tableTextColor }}>
              <AiOutlineMenu style={{ cursor: "pointer" }} color='#ef3121' />
            </td>
          </tr>
          <tr className={`${theme.lightTheme ? "border-top" : ""}`}>
            <td style={{ color: theme.tableTextColor }}>Mark</td>
            <td style={{ color: theme.tableTextColor }}>Otto</td>
            <td style={{ color: theme.tableTextColor }}>@mdo</td>
            <td style={{ color: theme.tableTextColor }}>
              <AiOutlineMenu style={{ cursor: "pointer" }} color='#ef3121' />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
