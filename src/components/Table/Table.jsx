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
      name: "Load score",
      label: "systemicLoad",
      sortable: true,
      render: true,
    },
    {
      name: "Edit",
      label: "edit",
      sortable: false,
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
    <table>
      <thead>
        <tr>
          {TABLE_HEADERS.map((item) => {
            if (item.render) {
              return (
                <th
                  key={item.label}
                  onClick={
                    item.sortable ? () => getSortValues(item.label) : undefined
                  }
                >
                  <span className={styles["th-content"]}>
                    {item.name}
                    {item.sortable && <CaretUpDown size={16} />}
                  </span>
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {exercises.length > 0 &&
          sortedData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.bodyPart}</td>
                <td>{item.primaryMuscle}</td>
                <td>{item.secondaryMuscles.join(", ")}</td>
                <td>{item.movement}</td>
                <td>{item.systemicLoad}</td>
                <td className={styles["edit-exercise"]}>
                  <div>
                    <DotsThreeVertical size={30} />
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
