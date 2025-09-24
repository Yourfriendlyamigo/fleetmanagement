import React, { useMemo, useState } from 'react';
import ActionButtons from '@/components/ActionButtons';
import DataTable from '@/components/DataTable';

export default function DataPageLayout({
  title,
  columns,
  data,
  rowActions,
  onAddNew,
  actionButtons,
  onBulkDelete,
  rowId = (row, idx) => row.id ?? idx,
}) {
  const [selectMode, setSelectMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState(new Set());

  // --- Filters ---
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('ALL');

  // Build category list from data (uses 'category' key if present)
  const categories = useMemo(() => {
    const s = new Set();
    data.forEach((r) => {
      const v = r.category ?? r.Category ?? r.CATEGORY;
      if (v) s.add(String(v));
    });
    return ['ALL', ...Array.from(s).sort()];
  }, [data]);

  const resetFilters = () => {
    setQuery('');
    setCategory('ALL');
  };

  const norm = (v) => String(v ?? '').toLowerCase();

  // Apply filters
  const filtered = useMemo(() => {
    return data.filter((row) => {
      // text query against any string field
      const matchesQuery =
        query.trim() === '' ||
        Object.values(row)
          .filter((v) => typeof v === 'string' || typeof v === 'number')
          .some((v) => norm(v).includes(norm(query)));

      // category filter (if a category field exists)
      const rowCat = row.category ?? row.Category ?? row.CATEGORY;
      const matchesCategory =
        category === 'ALL' || (rowCat && String(rowCat) === category);

      return matchesQuery && matchesCategory;
    });
  }, [data, query, category]);

  // --- Selection logic ---
  const toggleSelectMode = () => {
    setSelectMode((v) => !v);
    setSelectedIds(new Set());
  };

  const handleToggleRow = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleToggleAll = (checked) => {
    if (!checked) return setSelectedIds(new Set());
    const all = new Set(filtered.map((row, idx) => rowId(row, idx)));
    setSelectedIds(all);
  };

  const handleBulkDelete = () => {
    if (selectedIds.size === 0) return;
    onBulkDelete?.(Array.from(selectedIds));
    setSelectedIds(new Set());
    setSelectMode(false);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black">{title}</h1>
        <div className="flex items-center gap-2">
          {!selectMode ? (
            <>
              <button
                onClick={() => setSelectMode(true)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-black"
              >
                Select
              </button>
              {onAddNew && (
                <button
                  onClick={onAddNew}
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                >
                  Add New
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={handleBulkDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 disabled:opacity-50"
                disabled={selectedIds.size === 0}
              >
                Delete ({selectedIds.size})
              </button>
              <button
                onClick={toggleSelectMode}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>

      {/* Action buttons row */}
      {actionButtons && !selectMode && <ActionButtons actions={actionButtons} />}

      {/* Filter bar (hidden in Select mode) */}
      {!selectMode && (
        <div className="flex flex-col md:flex-row md:items-end gap-3 bg-white border border-gray-200 rounded-md p-3">
          <div className="flex-1">
            <label className="block text-xs font-medium text-gray-600 mb-1">Search</label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, phone, email…"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>

          <div className="w-full md:w-56">
            <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={resetFilters}
            className="md:self-end bg-gray-100 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200"
          >
            Reset
          </button>
        </div>
      )}

      {/* Data table */}
      <DataTable
        columns={columns}
        data={filtered}
        rowActions={!selectMode ? rowActions : undefined}
        // selection props
        selectionMode={selectMode}
        selectedIds={selectedIds}
        onToggleRow={handleToggleRow}
        onToggleAll={handleToggleAll}
        rowId={rowId}
      />
    </div>
  );
}
