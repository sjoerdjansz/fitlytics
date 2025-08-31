import styles from "./Table.module.css";
import { CaretUpDown, DotsThreeVertical } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";

export function Table({ data }) {
  const [exercises, setExercises] = useState([]);
  const [sortType, setSortType] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    setExercises(data);
  }, [data]);

  const TABLE_HEADERS = [
    {
      name: "Name",
      label: "name",
      sortable: true,
      render: true,
    },
    {
      name: "Body part",
      label: "bodyPart",
      sortable: true,
      render: true,
    },
    {
      name: "Primary",
      label: "primaryMuscle",
      sortable: true,
      render: true,
    },
    {
      name: "Secondary",
      label: "secondaryMuscles",
      sortable: false,
      render: true,
    },
    {
      name: "Joints",
      label: "primaryJoints",
      sortable: false,
      render: false,
    },
    {
      name: "Movement",
      label: "movement",
      sortable: true,
      render: true,
    },
    {
      name: "Load",
      label: "systemicLoad",
      sortable: true,
      render: true,
    },
  ];

  function getSortValues(type) {
    if (sortType === type) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortType(type);
      setSortDirection("asc");
    }
  }

  const sortedData = useMemo(() => {
    let copy = [...exercises];
    let sorted;
    if (sortType === "id" || sortType === "systemicLoad") {
      if (sortDirection === "asc") {
        sorted = copy.sort((a, b) => {
          return a[sortType] - b[sortType];
        });
      } else {
        sorted = copy.sort((a, b) => {
          return b[sortType] - a[sortType];
        });
      }
    } else {
      if (sortDirection === "asc") {
        sorted = copy.sort((a, b) => {
          return a[sortType].localeCompare(b[sortType], undefined, {
            sensitivity: "base",
            numeric: true,
          });
        });
      } else {
        sorted = copy.sort((a, b) => {
          return b[sortType].localeCompare(a[sortType], undefined, {
            sensitivity: "base",
            numeric: true,
          });
        });
      }
    }
    return sorted;
  }, [exercises, sortDirection, sortType]);

  return (
    <>
      <ul className={styles["exercises-list__header"]}>
        {TABLE_HEADERS.map((item) => {
          if (item.render) {
            return (
              <li
                className={styles["exercises-list__header-item"]}
                key={item.label}
                onClick={
                  item.sortable ? () => getSortValues(item.label) : undefined
                }
              >
                <span className={styles["exercises-list__header-content"]}>
                  {item.name}
                  {item.sortable && <CaretUpDown size={16} />}
                </span>
              </li>
            );
          }
        })}
      </ul>
      <ul className={styles["exercises-list__content"]}>
        {exercises.length > 0 &&
          sortedData.map((item) => {
            return (
              <li
                className={styles["exercises-list__content-item"]}
                key={item.id}
              >
                <div data-label={TABLE_HEADERS[0].name}>{item.name}</div>
                <div data-label={TABLE_HEADERS[1].name}>{item.bodyPart}</div>
                <div data-label={TABLE_HEADERS[2].name}>
                  {item.primaryMuscle}
                </div>
                <div data-label={TABLE_HEADERS[3].name}>
                  {item.secondaryMuscles.join(", ") || "–"}
                </div>

                <div data-label={TABLE_HEADERS[5].name}>{item.movement}</div>
                <div data-label={TABLE_HEADERS[6].name}>
                  {item.systemicLoad}
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
