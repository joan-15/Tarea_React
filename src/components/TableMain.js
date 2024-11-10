import React from "react";

const TableMain = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Información</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableMain;
