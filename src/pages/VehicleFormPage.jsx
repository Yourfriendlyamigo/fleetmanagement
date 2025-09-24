// src/pages/VehicleFormPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { vehicles as seedVehicles } from "@/mocks";
import FormPageLayout from "@/components/layout/FormPageLayout";
import FormGrid from "@/components/layout/FormGrid";
import Field from "@/components/layout/Field";

/** Lightweight, accessible(ish) custom select without extra deps */
function NiceSelect({ options, value, onChange, placeholder = "Select…", name }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const selectedIndex = options.findIndex((o) => o === value);

  // close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!btnRef.current || !listRef.current) return;
      if (btnRef.current.contains(e.target) || listRef.current.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard navigation
  const onKeyDown = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.min((selectedIndex < 0 ? 0 : selectedIndex + 1), options.length - 1);
      onChange({ target: { name, value: options[next] } });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = Math.max((selectedIndex < 0 ? 0 : selectedIndex - 1), 0);
      onChange({ target: { name, value: options[prev] } });
    } else if (e.key === "Enter") {
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
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-left text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`block truncate ${value ? "text-gray-900" : "text-gray-400"}`}>
          {value || placeholder}
        </span>
        {/* Chevron */}
        <svg
          className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
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
                  selected ? "bg-blue-50 font-medium text-blue-700" : "text-gray-800"
                }`}
                onClick={() => {
                  onChange({ target: { name, value: opt } });
                  setOpen(false);
                  btnRef.current?.focus();
                }}
              >
                {/* Checkmark when selected */}
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

  const list = useMemo(() => [...seedVehicles], []);
  const editing = mode === "edit";
  const existing = editing ? list.find((v) => String(v.id) === String(id)) : null;

  const [form, setForm] = useState({
    company: existing?.company ?? "Main",
    regNumber: existing?.regNumber ?? "",
    make: existing?.make ?? "",
    chassisNumber: existing?.chassisNumber ?? "",
    type: existing?.type ?? "Truck",
    status: existing?.status ?? "Working",
    driver: existing?.driver ?? "",
    purchaseValue: existing?.purchaseValue ?? "",
    initialOdometer: existing?.initialOdometer ?? "",
    registrationCard: null,
  });

  const onChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  const onSave = (closeAfter = false) => {
    if (!form.regNumber.trim()) {
      alert("Registration Number is required");
      return;
    }
    // TODO: integrate API create/update here
    if (closeAfter) navigate("/vehicles");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSave(true);
  };

  return (
    <FormPageLayout
      title={editing ? "Edit Vehicle" : "Add Vehicle"}
      subtitle="Fill the details below."
      onSave={() => onSave(false)}
      onExit={() => navigate("/vehicles")}
    >
      <form onSubmit={onSubmit} className="space-y-6 max-w-screen-xl mx-auto">
        <FormGrid cols={2}>
          {/* Company */}
          <Field label="Company *">
            <NiceSelect
              name="company"
              value={form.company}
              onChange={onChange}
              options={["Main", "Subsidiary"]}
            />
          </Field>

          {/* Make */}
          <Field label="Make" help="e.g., HOWO, Scania">
            <input
              name="make"
              value={form.make}
              onChange={onChange}
              placeholder="Enter vehicle make"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>

          {/* Registration Number */}
          <Field label="Registration Number *">
            <input
              name="regNumber"
              value={form.regNumber}
              onChange={onChange}
              placeholder="T123 ABC"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>

          {/* Purchase Value */}
          <Field label="Purchase Value" help="TZS / USD (numbers only)">
            <input
              type="number"
              name="purchaseValue"
              value={form.purchaseValue}
              onChange={onChange}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>

          {/* Upload (full width) */}
          <div className="md:col-span-2">
            <Field label="Upload Registration Card" help="Allowed: .jpeg, .jpg, .pdf, .png">
              <input
                type="file"
                name="registrationCard"
                accept=".jpeg,.jpg,.png,.pdf"
                onChange={onChange}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </Field>
          </div>

          {/* Initial Odometer */}
          <Field label="Initial Odometer Reading" help="km">
            <input
              type="number"
              name="initialOdometer"
              value={form.initialOdometer}
              onChange={onChange}
              placeholder="0"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>

          {/* Chassis Number */}
          <Field label="Chassis Number">
            <input
              name="chassisNumber"
              value={form.chassisNumber}
              onChange={onChange}
              placeholder="VIN / Chassis #"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>

          {/* Status */}
          <Field label="Status">
            <NiceSelect
              name="status"
              value={form.status}
              onChange={onChange}
              options={["Working", "Maintenance", "Inactive"]}
            />
          </Field>

          {/* Vehicle Type */}
          <Field label="Vehicle Type">
            <NiceSelect
              name="type"
              value={form.type}
              onChange={onChange}
              options={["Truck", "Trailer", "Car"]}
            />
          </Field>

          {/* Driver */}
          <Field label="Driver">
            <input
              name="driver"
              value={form.driver}
              onChange={onChange}
              placeholder="Assigned driver (optional)"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </Field>
        </FormGrid>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={() => navigate("/vehicles")}
            className="rounded-lg px-3 py-2 text-sm border border-gray-300 bg-white hover:bg-gray-50"
          >
            Exit
          </button>
          <button
            type="button"
            onClick={() => onSave(false)}
            className="rounded-lg px-3 py-2 text-sm border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            Save
          </button>
          <button
            type="submit"
            className="rounded-lg px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700"
          >
            Save & Close
          </button>
        </div>
      </form>
    </FormPageLayout>
  );
}
