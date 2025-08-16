import React, { useState } from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

  const handleSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = sortConfig
    ? [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      })
    : data;

  const toggleRowSelection = (id: string | number) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
    if (onRowSelect) {
      onRowSelect(data.filter((row) => newSelection.has(row.id)));
    }
  };

  if (loading) return <p className="p-4">Loading...</p>;
  if (data.length === 0) return <p className="p-4">No data available</p>;

  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="p-2">Select</th>}
          {columns.map((col) => (
            <th
              key={col.header}
              className="p-2 cursor-pointer"
              onClick={() => handleSort(col.accessor)}
            >
              {col.header}
              {sortConfig?.key === col.accessor && (sortConfig.direction === "asc" ? " 🔼" : " 🔽")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="border-t">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleRowSelection(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.accessor)} className="p-2">
                {String(row[col.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}