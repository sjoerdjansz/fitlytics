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

  // functie die de data die gerendert moet worden checkt per type
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
                  // we checken of er een avatar is en stoppen boolean in de const
                  const isAvatar = column.label === "avatar";

                  return (
                    <div
                      // geen label voor avatar zodat er geen before content kan komen
                      data-label={isAvatar ? undefined : column.name}
                      key={column.label}
                      // als er een avatar is dan geven we de cell speciale class
                      className={isAvatar ? styles["cell--avatar"] : undefined}
                    >
                      {/* als er avatar in de row is renderen we die, anders "-"*/}
                      {/*niks. // TODO: eigenlijk moet dit niet nodig zijn omdat*/}
                      {/*Avatar component de fallback image moet tonen*/}
                      {/*En tot slot anders de andere content tonen met de renderValue*/}

                      {isAvatar
                        ? row.avatar
                          ? row.avatar
                          : "-"
                        : renderValue(row, column)}
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
