import React from 'react';

/**
 * Generic data table component.
 * Props:
 *  - columns: [{ key, header, render? }]
 *  - data: array of rows
 *  - rowActions: [{ label, onClick(row) }]
 *  - selectionMode: boolean (optional) → show checkboxes
 *  - selectedIds: Set (optional) → ids currently selected
 *  - onToggleRow: (id) => void (optional)
 *  - onToggleAll: (checked:boolean) => void (optional)
 *  - rowId: (row, idx) => any (optional) → stable id for each row (default idx)
 */
export default function DataTable({
  columns,
  data,
  rowActions = [],
  selectionMode = false,
  selectedIds = new Set(),
  onToggleRow,
  onToggleAll,
  rowId = (row, idx) => row.id ?? idx,
}) {
  const allChecked =
    selectionMode &&
    data.length > 0 &&
    data.every((row, idx) => selectedIds.has(rowId(row, idx)));
  const someChecked =
    selectionMode &&
    !allChecked &&
    data.some((row, idx) => selectedIds.has(rowId(row, idx)));

  return (
    <div className="overflow-x-auto bg-white border border-gray-200 rounded-md shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {selectionMode && (
              <th className="px-3 py-2 w-8">
                <input
                  type="checkbox"
                  checked={allChecked}
                  ref={(el) => {
                    if (el) el.indeterminate = someChecked;
                  }}
                  onChange={(e) => onToggleAll?.(e.target.checked)}
                />
              </th>
            )}
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                {col.header}
              </th>
            ))}
            {rowActions.length > 0 && (
              <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.map((row, idx) => {
            const id = rowId(row, idx);
            const checked = selectedIds.has(id);

            return (
              <tr key={id} className="hover:bg-gray-50">
                {selectionMode && (
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleRow?.(id)}
                    />
                  </td>
                )}

                {columns.map((col) => (
                  <td key={col.key} className="px-3 py-2 whitespace-nowrap text-sm text-gray-800">
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                ))}

                {rowActions.length > 0 && (
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-800 flex gap-1">
                    {rowActions.map((action) => (
                      <button
                        key={action.label}
                        onClick={() => action.onClick(row)}
                        className="px-2 py-1 text-xs border rounded-md text-blue-600 border-blue-600 hover:bg-blue-50"
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
