"use client";

import type React from "react";

import { useState, useEffect, useRef, type KeyboardEvent } from "react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  search_placeholder?: string;
  className?: string;
};

export default function CustomSelect({
  options,
  defaultValue = "",
  onChange,
  placeholder = "Select an option",
  search_placeholder = "Search...",
  className = "",
}: CustomSelectProps) {
  const [is_open, set_is_open] = useState(false);
  const [selected_value, set_selected_value] = useState(defaultValue);
  const [search_query, set_search_query] = useState("");
  const [focused_index, set_focused_index] = useState(-1);
  const select_ref = useRef<HTMLDivElement>(null);
  const search_input_ref = useRef<HTMLInputElement>(null);
  const option_refs = useRef<(HTMLLIElement | null)[]>([]);

  const toggle_dropdown = () => {
    const new_state = !is_open;
    set_is_open(new_state);
    if (new_state) {
      setTimeout(() => {
        search_input_ref.current?.focus();
      }, 10);
    } else {
      set_search_query("");
    }
  };

  const handle_select = (value: string) => {
    set_selected_value(value);
    set_is_open(false);
    set_search_query("");
    if (onChange) onChange(value);
  };

  const filtered_options = options.filter((option: Option) => option.label.toLowerCase().includes(search_query.toLowerCase()));

  const selected_option = options.find((option: Option) => option.value === selected_value);

  const handle_search_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_search_query(e.target.value);
    set_focused_index(-1);
  };

  const handle_key_down = (e: KeyboardEvent<HTMLInputElement>) => {
    if (filtered_options.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      set_focused_index(prev => (prev < filtered_options.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      set_focused_index(prev => (prev > 0 ? prev - 1 : filtered_options.length - 1));
    } else if (e.key === "Enter" && focused_index >= 0) {
      e.preventDefault();
      handle_select(filtered_options[focused_index].value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      set_is_open(false);
      set_search_query("");
    }
  };

  useEffect(() => {
    if (focused_index >= 0 && option_refs.current[focused_index]) {
      option_refs.current[focused_index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [focused_index]);

  useEffect(() => {
    option_refs.current = option_refs.current.slice(0, filtered_options.length);
  }, [filtered_options]);

  useEffect(() => {
    const handle_click_outside = (event: MouseEvent) => {
      if (select_ref.current && !select_ref.current.contains(event.target as Node)) {
        set_is_open(false);
        set_search_query("");
      }
    };

    document.addEventListener("mousedown", handle_click_outside);
    return () => {
      document.removeEventListener("mousedown", handle_click_outside);
    };
  }, []);

  return (
    <div ref={select_ref} className={`relative w-full ${className}`}>
      <div
        className="flex items-center justify-between w-full border-none rounded-md cursor-pointer bg-white border-gray-300 hover:border-primary transition-colors duration-200"
        onClick={toggle_dropdown}
      >
        <div className="flex items-center">
          {selected_option ? <span className="text-gray-800 font-bold">{selected_option.label}</span> : <span className="text-gray-500">{placeholder}</span>}
        </div>
        <i className={`bx ${is_open ? "bx-chevron-up" : "bx-chevron-down"} text-gray-500`}></i>
      </div>

      {is_open && (
        <div className="absolute z-10 w-full mt-1 overflow-hidden bg-white border rounded-md shadow-lg border-gray-300">
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                ref={search_input_ref}
                type="text"
                className="w-full pl-9 pr-3 py-2 text-sm bg-gray-100 border-0 rounded-md focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 placeholder-gray-500"
                placeholder={search_placeholder}
                value={search_query}
                onChange={handle_search_change}
                onKeyDown={handle_key_down}
              />
            </div>
          </div>

          {filtered_options.length > 0 ? (
            <ul className="py-1 overflow-auto max-h-60">
              {filtered_options.map((option: Option, index: number) => (
                <li
                  key={option.value}
                  ref={el => {
                    option_refs.current[index] = el;
                  }}
                  className={`px-3 py-2 cursor-pointer hover:bg-gray-100 ${selected_value === option.value ? "bg-gray-100" : ""} ${
                    focused_index === index ? "bg-gray-200" : ""
                  }`}
                  onClick={() => handle_select(option.value)}
                  onMouseEnter={() => set_focused_index(index)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">{option.label}</span>
                    {selected_value === option.value && <i className="bx bx-check text-primary"></i>}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="py-3 px-3 text-center text-gray-500">
              <i className="bx bx-search-alt text-xl mb-1"></i>
              <p>No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
