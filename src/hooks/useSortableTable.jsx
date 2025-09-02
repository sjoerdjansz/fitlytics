import { useEffect, useMemo, useState } from "react";

export function useSortableTable(data = [], sortString, sortDir) {
  const [tableData, setTableData] = useState([]);
  const [sortType, setSortType] = useState(sortString);
  const [sortDirection, setSortDirection] = useState(sortDir);

  useEffect(() => {
    setTableData(Array.isArray(data) ? data : []);
  }, [data]);

  function getSortValues(type) {
    if (sortType === type) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortType(type);
      setSortDirection("asc");
    }
  }

  const sortedData = useMemo(() => {
    if (!tableData) return;
    let copy = [...tableData];
    let sorted;
    // sort by number (in data set). Is niet de meest elegante oplossing want hard coded values en error prone
    const sortTypesArray = [
      "id",
      "systemicLoad",
      "workoutsPerWeek",
      "duration",
      "activeClients",
      "completed",
      "compliance",
    ];
    if (sortTypesArray.includes(sortType)) {
      if (sortDirection === "asc") {
        sorted = copy.sort((a, b) => {
          return a[sortType] - b[sortType];
        });
      } else {
        sorted = copy.sort((a, b) => {
          return b[sortType] - a[sortType];
        });
      }
      // sort by string
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
  }, [tableData, sortDirection, sortType]);

  return {
    tableData: tableData,
    getSortValues: getSortValues,
    sortedData: sortedData,
  };
}
