// src/pages/VehicleFormPage.jsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { vehicles as seed } from '@/mocks';

/** Lightweight custom select (no libs). Uses onValueChange(name, value). */
function NiceSelect({ name, value, onValueChange, options, placeholder = 'Select…' }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const listRef = useRef(null);

  const emit = (val) => onValueChange(name, val);

  // close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!btnRef.current || !listRef.current) return;
      if (btnRef.current.contains(e.target) || listRef.current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // basic keyboard support
  const selectedIndex = options.findIndex((o) => o === value);
  const onKeyDown = (e) => {
    if (!open && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown')) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.min((selectedIndex < 0 ? 0 : selectedIndex + 1), options.length - 1);
      emit(options[next]);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = Math.max((selectedIndex < 0 ? 0 : selectedIndex - 1), 0);
      emit(options[prev]);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    }
  };

  return (
    <div className="relative" onKeyDown={onKeyDown}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-left text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className={`block truncate ${value ? 'text-gray-900' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <svg className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-200 bg-white py-1 text-sm shadow-lg"
        >
          {options.map((opt) => {
            const selected = opt === value;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={selected}
                className={`flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-blue-50 ${
                  selected ? 'bg-blue-50 font-medium text-blue-700' : 'text-gray-800'
                }`}
                onClick={() => {
                  emit(opt);
                  setOpen(false);
                  btnRef.current?.focus();
                }}
              >
                {selected ? (
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.415 0l-3-3a1 1 0 111.415-1.415L8.5 12.086l6.793-6.793a1 1 0 011.411-.003z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span className="h-4 w-4" />
                )}
                <span className="truncate">{opt}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function VehicleFormPage({ mode }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const list = useMemo(() => [...seed], []);
  const existing = mode === 'edit' ? list.find((v) => String(v.id) === id) : null;

  const [form, setForm] = useState({
    company: existing?.company ?? 'Main',
    regNumber: existing?.regNumber ?? '',
    make: existing?.make ?? '',
    chassisNumber: existing?.chassisNumber ?? '',
    type: existing?.type ?? 'Truck',
    status: existing?.status ?? 'Working',
    driver: existing?.driver ?? '',
    purchaseValue: existing?.purchaseValue ?? '',
    initialOdometer: existing?.initialOdometer ?? '',
    registrationCard: null,
  });

  // regular inputs still use DOM event handler
  const onChange = (e) => {
    const { name, value, files } = e.target || {};
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  // helper for NiceSelect
  const setField = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const onSubmit = (e) => {
    e?.preventDefault?.();
    if (!form.regNumber.trim()) return alert('Registration Number is required');
    // TODO: create/update via API
    navigate('/vehicles');
  };

  const InputWrap = ({ label, help, children }) => (
    <label className="block">
      <span className="block text-sm font-medium text-gray-800 mb-1">{label}</span>
      {children}
      {help && <p className="mt-1 text-xs text-gray-500">{help}</p>}
    </label>
  );

  const inputCls =
    'w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white';

  return (
    <div className="p-6 space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {mode === 'edit' ? 'Edit Vehicle' : 'Add Vehicle'}
          </h1>
          <p className="text-sm text-gray-500 mt-1">Fill the details below.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => navigate('/vehicles')}
            className="inline-flex items-center rounded-lg px-3 py-2 text-sm border border-gray-300 bg-white hover:bg-gray-50"
          >
            Exit
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="inline-flex items-center rounded-lg px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
        <form onSubmit={onSubmit} className="space-y-6 max-w-screen-xl mx-auto">
          {/* 12-col grid */}
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Company*">
                <NiceSelect
                  name="company"
                  value={form.company}
                  onValueChange={setField}
                  options={['Main', 'Subsidiary']}
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Make">
                <input
                  name="make"
                  value={form.make}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="HOWO, Scania…"
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Registration Number*">
                <input
                  name="regNumber"
                  value={form.regNumber}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="T123 ABC"
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Purchase Value">
                <input
                  type="number"
                  name="purchaseValue"
                  value={form.purchaseValue}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="0"
                />
              </InputWrap>
            </div>

            {/* full width row for upload */}
            <div className="col-span-12">
              <InputWrap label="Upload Registration Card" help="Allowed: .jpeg, .jpg, .pdf, .png">
                <input
                  type="file"
                  name="registrationCard"
                  accept=".jpeg,.jpg,.png,.pdf"
                  onChange={onChange}
                  className={inputCls}
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Initial Odometer Reading">
                <input
                  type="number"
                  name="initialOdometer"
                  value={form.initialOdometer}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="0"
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Chassis Number">
                <input
                  name="chassisNumber"
                  value={form.chassisNumber}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="VIN / Chassis #"
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Status">
                <NiceSelect
                  name="status"
                  value={form.status}
                  onValueChange={setField}
                  options={['Working', 'Maintenance', 'Inactive']}
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Vehicle Type">
                <NiceSelect
                  name="type"
                  value={form.type}
                  onValueChange={setField}
                  options={['Truck', 'Trailer', 'Car']}
                />
              </InputWrap>
            </div>

            <div className="col-span-12 md:col-span-6">
              <InputWrap label="Driver">
                <input
                  name="driver"
                  value={form.driver}
                  onChange={onChange}
                  className={inputCls}
                  placeholder="Assigned driver (optional)"
                />
              </InputWrap>
            </div>
          </div>

          {/* Footer buttons (inside card) */}
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => navigate('/vehicles')}
              className="rounded-lg px-3 py-2 text-sm border border-gray-300 bg-white hover:bg-gray-50"
            >
              Exit
            </button>
            <button
              type="submit"
              className="rounded-lg px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
