import styles from "./Table.module.css";
import { CaretUpDown, DotsThreeVertical } from "@phosphor-icons/react";
import { useSortableTable } from "../../hooks/useSortableTable.jsx";

export function Table({ data, headers, gridColumns }) {
  const { tableData, getSortValues, sortedData } = useSortableTable(
    data,
    "id",
    "asc",
  );

  const filteredHeaders = headers.filter((item) => {
    return item.render;
  });

  function renderValue(row, column) {
    const value = row[column.label];
    if (Array.isArray(value)) {
      return value.join(", ") || "–";
    }

    if (value === null || value === undefined || value === "") {
      return "–";
    }

    if (column.suffix) {
      return `${value}${column.suffix}`;
    }
    return value;
  }

  const cols = Array.isArray(gridColumns) ? gridColumns.join(" ") : undefined;
  return (
    <div
      className={styles["table-list"]}
      style={cols ? { "--cols": cols } : undefined}
    >
      <ul className={styles["table-list__header"]}>
        {filteredHeaders.map((item) => {
          return (
            <li
              className={styles["table-list__header-item"]}
              key={item.label}
              onClick={
                item.sortable ? () => getSortValues(item.label) : undefined
              }
            >
              <span className={styles["table-list__header-content"]}>
                {item.name}
                {item.sortable && <CaretUpDown size={16} />}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className={styles["table-list__content"]}>
        {tableData.length > 0 &&
          sortedData.map((row) => {
            return (
              <li className={styles["table-list__content-item"]} key={row.id}>
                {filteredHeaders.map((column) => {
                  return (
                    <div data-label={column.name} key={column.label}>
                      {renderValue(row, column)}
                    </div>
                  );
                })}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
