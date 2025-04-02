"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useController } from "react-hook-form";
import Image from "next/image";

export function SelectDropdown({ label, name, options, control, onValueChange }) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  const handleChange = (newValue) => {
    onChange(newValue); // Updates form state
    if (onValueChange) onValueChange(newValue); // Updates local state
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div>
      {label && (
        <label className="block mb-2 font-poppin font-[400] text-[0.9rem]">
          {label}
        </label>
      )}
      <Select onValueChange={handleChange} value={value}>
        <SelectTrigger className="border border-gray-300 text-white">
          <SelectValue>
            {selectedOption ? (
              <div className="flex items-center gap-2">
                <Image
                  src={selectedOption.flag}
                  alt={selectedOption.label}
                  width={16}
                  height={16}
                  className="size-4"
                />
                <span>{selectedOption.label}</span>
              </div>
            ) : (
              "Select an option"
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                <div className="flex items-center gap-2">
                  <Image
                    src={option.flag}
                    alt={option.label}
                    width={16}
                    height={16}
                    className="size-4"
                  />
                  <span>{option.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
