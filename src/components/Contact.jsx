import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
export default function Contact() {
  const ref = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState();
  const [limit, setLimit] = useState(false);
  let count = 0;
  const onSubmit = (e) => {
    count++;
    {
      count == 1 && setLimit(true);
    }
    setSuccess(true);
  };
  return (
    <form
      id="Contact"
      className="xxl:w-[480px] xl:w-[35%] sm:w-[100%] sm:gap-[12px] sm:mt-12 xl:mt-0 flex flex-col lg:gap-[25px] xl:gap-[20px]"
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between gap-[20px]">
        <div className="w-full">
          <input
            placeholder="Name"
            className={`sm:w-full md:min-w-[280px] lg:min-w-[0px] md:w-full rounded-[8px] bg-transparent border-[1px] border-white border-opacity-[30%] text-white text-opacity-[70%] text-[14px] pl-[20px] p-[11px] outline-none ${
              errors.name
                ? " outline-red border-none outline-1"
                : "outline-none"
            }`}
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name?.type === "required" && (
            <p className="text-red mt-1 sm:text-[10px] md:text-[13px]">
              Name input is blank.
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            placeholder="Email"
            className={`sm:w-full md:min-w-[280px] lg:min-w-[0px] md:w-full rounded-[8px] bg-transparent border-[1px] border-white border-opacity-[30%] text-white text-opacity-[70%] text-[14px] pl-[20px] p-[11px] outline-none ${
              errors.email && " outline-red border-none outline-1"
            }`}
            {...register("email", {
              required: "Filling is required!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Mail is not valid!",
              },
            })}
          />
          {errors.email && (
            <p className="text-red mt-1 sm:text-[10px] md:text-[13px]">
              The email is incorrect
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className={`w-full flex gap-5 sm:h-[120px] md:h-[170px] lg:h-[180px] xl:h-[120px] p-[20px] pt-[14px] bg-transparent border-[1px] rounded-[8px] border-white border-opacity-[30%] ${
            errors.message &&
            " border-none outline outline-solid outline-red outline-[1px]"
          }`}
        >
          <textarea
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="xl:w-[368px] sm:w-full md:w-full h-full text-white text-opacity-[70%] text-[14px]   bg-transparent outline-none"
            placeholder="Text"
          />{" "}
          {!limit ? (
            <button
              className="md:w-[74px] md:h-[42px] sm:rounded-[6px] sm:w-[60px] sm:h-[32px] bg-red text-white flex justify-center items-center md:rounded-[8px] self-end hover:bg-lightred transition duration-200"
              type="submit"
            >
              <h1 className="md:text-[14px] sm:text-[10px] text-white">Send</h1>
            </button>
          ) : (
            <div className="self-end w-[74px] h-[42px] bg-red rounded-[8px]  flex justify-center items-center">
              <h1 className="md:text-[11px] sm:text-[9px] text-white">
                Submited
              </h1>
            </div>
          )}
        </div>
        {errors.message?.type === "required" && (
          <p className="text-red mt-1 sm:text-[10px] md:text-[13px]">
            Text is blank
          </p>
        )}
        {success && (
          <p className="mt-2 text-white sm:text-[10px] md:text-[14px]">
            Your message has been sent.
          </p>
        )}
      </div>
    </form>
  );
}
