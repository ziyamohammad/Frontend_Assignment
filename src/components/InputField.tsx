import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:border-blue-500",
  outlined: "border border-gray-400 focus:border-blue-500",
  ghost: "border-b border-gray-400 focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col w-full gap-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      <div className="relative w-full">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full rounded-md focus:outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${
            invalid ? "border-red-500" : ""
          } ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 top-2 text-sm text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>
      {helperText && !invalid && <p className="text-xs text-gray-500">{helperText}</p>}
      {invalid && errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

