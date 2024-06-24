"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { createTask } from "@/helpers/task";
import { useRouter } from "next/navigation";

export const FormContact = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      name: Yup.string().required("Required*"),
      phone: Yup.string().required("Required*"),
    }),
    onSubmit: (values, { resetForm }) => {
      createTask(values);

      if (Object.keys(values).length > 0) {
        setSuccessMessage("Form submitted successfully!");
        resetForm();
      }

      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    },
  });

  return (
    <form className="bg-jordy-blue-100 p-20" onSubmit={formik.handleSubmit}>
      <div className="mb-20">
        <div className="text-center text-jordy-blue-800 text-4xl">
          Get a Free Quote Now
        </div>
        <div className="text-center text-jordy-blue-800 text-1xl">
          Nashville, Tennessee
        </div>
        <div className="text-center text-jordy-blue-800 text-1xl">
          hello@jrglobalservice.net.com
        </div>
        <div className="text-center text-jordy-blue-800 text-1xl">
          (629) 729-00-37
        </div>
      </div>
      <div className="mb-4 text-jordy-blue-800">
        <label htmlFor="name" className="block ">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={
            " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
          }
          required
          placeholder={"Enter your name"}
        />
      </div>
      <div className="mb-4 text-jordy-blue-800">
        <label htmlFor="address" className="block ">
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className={
            " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
          }
          placeholder={"Enter your address"}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-4 text-jordy-blue-800">
        <label htmlFor="email" className="block ">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder={"Enter your email"}
          className={
            " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
          }
        />
      </div>
      <div className="mb-6 text-jordy-blue-800">
        <label htmlFor="phone" className="block "></label>
        <PhoneInput
          country={"us"}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue("phone", phone)}
          inputClass="text-jordy-blue-800 shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-danger text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="mb-4 text-jordy-blue-800">
        <label htmlFor="subject" className="block ">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          placeholder={"Enter the subject"}
          className={
            " shadow appearance-none border border-jordy-blue-500  rounded w-full py-3 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
          }
        />
      </div>
      <div className="mb-4 text-jordy-blue-800">
        <label htmlFor=" message" className="block ">
          Message
        </label>
        <input
          id=" message"
          name="message"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={
            " shadow appearance-none border border-jordy-blue-500  rounded w-full pb-20 px-3 text-gray-700 bg-gray-300 focus:bg-jordy-blue-200 focus:outline-none focus:ring-1 focus:jordy-blue-500 transition ease-in-out duration-150 "
          }
        />
      </div>
      <button
        type="submit"
        className="w-full lg:max-w-32 my-10 bg-jordy-blue-600 hover:bg-jordy-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      {successMessage && (
        <div className="text-center text-jordy-blue-800 transition ease-in-out duration-150">
          {successMessage}
        </div>
      )}
    </form>
  );
};

