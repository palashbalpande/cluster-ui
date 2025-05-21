"use client";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IPasswordInputProps<T extends FieldValues> {
  name: Path<T>;
  placeholder?: string;
  register: UseFormRegister<T>;
  error?: string;
}

const PasswordInput = <T extends FieldValues>({
  name,
  placeholder,
  register,
  error,
}: IPasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full mb-6">
      <input
        id={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
        {...register(name)}
      />
      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
      {error && (
        <span className="text-red-500 text-xs mt-1 block min-h-[1.25rem]">
          {error}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;
