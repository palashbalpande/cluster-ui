import { IFieldConfig } from "@/lib/utils/fieldConfig";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  FieldError,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";
import RenderInputFields from "../form/RenderInputFields";

interface IInputCardProps<T> {
  fields: IFieldConfig[];
  schema: ZodType<T>;
  //onSubmit: (data: T) => void;
  onSubmit: SubmitHandler<T>;
  buttonText?: string;
}

const InputCard = <T extends FieldValues>({
  fields,
  schema,
  onSubmit,
  buttonText,
}: IInputCardProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-900 space-y-7 px-10 py-14 border border-gray-500 rounded-2xl text-md"
    >
      {fields?.map((field) => {
        const error = errors[field.name as Path<T>] as FieldError;
        return (
          <div key={field.name} className="">
            <RenderInputFields<T>
              field={field}
              register={register}
              error={error}
            />
          </div>
        );
      })}
      <div className="flex justify-center">
        <button
          type="submit"
          className="cursor-pointer py-2 px-10 rounded-xl bg-blue-400 hover:bg-blue-500 text-white"
        >
          {buttonText || "Submit"}
        </button>
      </div>
    </form>
  );
};

export default InputCard;
