import { IFieldConfig } from "@/lib/utils/fieldConfig";
import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import PasswordInput from "./PasswordInput";

interface IRenderInputProps<T extends FieldValues> {
  field: IFieldConfig;
  register: UseFormRegister<T>;
  error?: FieldError;
}

const RenderInputFields = <T extends FieldValues>({
  field,
  register,
  error,
}: IRenderInputProps<T>) => {
  const baseClasses =
    "relative w-full bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300";

  const wrapperClasses = "w-full mb-6 ";

  const renderError = error && (
    <span className=" text-red-500 text-xs mt-1 block min-h-[1.25rem]">
      {error?.message ?? ""}
    </span>
  );

  switch (field.type) {
    case "textarea":
      return (
        <div className={wrapperClasses}>
          <textarea
            id={field.name}
            placeholder={field.placeholder}
            className={baseClasses}
            {...register(field.name as Path<T>)}
          />
          {renderError}
        </div>
      );
    case "select":
      return (
        <div className={wrapperClasses}>
          <select
            id={field.name}
            className={baseClasses}
            {...register(field.name as Path<T>)}
          >
            <option value="">--Role--</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {renderError}
        </div>
      );
    case "password":
      // return (
      //   <div className={wrapperClasses}>
      //     <input
      //       id={field.name}
      //       type="password"
      //       placeholder={field.placeholder}
      //       className={baseClasses}
      //       {...register(field.name as Path<T>)}
      //     />
      //     {renderError}
      //   </div>
      // );
      return (
        <PasswordInput
          name={field.name as Path<T>}
          placeholder={field.placeholder}
          register={register}
          error={error?.message}
        />
      );
    default:
      return (
        <div className={wrapperClasses}>
          <input
            id={field.name}
            type="text"
            placeholder={field.placeholder}
            className={baseClasses}
            {...register(field.name as Path<T>)}
          />
          {renderError}
        </div>
      );
  }
};

export default RenderInputFields;
