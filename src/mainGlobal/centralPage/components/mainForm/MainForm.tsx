"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { createTask } from "@/helpers/task";
import { useRouter } from "next/navigation";

export const MainForm = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      userEmail: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required*"),
      phone: Yup.string().required("Required*"),
    }),
    onSubmit: (values, { resetForm }) => {
      createTask(values);
      console.log(values)
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
    <form
      className="bg-jordy-blue-600 py-20 px-6 md:p-20"
      onSubmit={formik.handleSubmit}
    >
      <div className="mb-20 ">
        <div className="text-center text-white text-4xl">
          Get a Free Quote Now
        </div>
        <div className="text-center text-white text-1xl">
          Nashville, Tennessee
        </div>
        <div className="text-center text-white text-1xl">
          hello@jrglobalservice.net.com
        </div>
        <div className="text-center text-white text-1xl">629-729-00-37</div>
      </div>
      <div className="mb-4 text-jordy-blue-100">
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
            " shadow appearance-none border border-jordy-blue-50  rounded w-full py-3 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
          }
          required
          placeholder={"Enter your name"}
        />
      </div>
      <div className="mb-4 text-jordy-blue-100">
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
            " shadow appearance-none border border-jordy-blue-50  rounded w-full py-3 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
          }
          placeholder={"Enter your address"}
        />
       
      </div>
      <div className="mb-4 text-jordy-blue-100">
        <label htmlFor="email" className="block ">
          Email
        </label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userEmail}
          placeholder={"Enter your email"}
          className={
            " shadow appearance-none border border-jordy-blue-50  rounded w-full py-3 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
          }
        />
      </div>
      <div className="mb-6 text-jordy-blue-100">
        <label htmlFor="phone" className="block "></label>
        <PhoneInput
          country={"us"}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue("phone", phone)}
          inputClass=" shadow appearance-none border border-jordy-blue-50  rounded w-full py-3 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-danger text-sm">{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className="mb-4 text-jordy-blue-100">
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
          placeholder={"Type the subject"}
          className={
            " shadow appearance-none border border-jordy-blue-50  rounded w-full py-3 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
          }
        />
      </div>
      <div className="mb-4 text-jordy-blue-100">
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
          placeholder={"Type the message"}
          className={
            " shadow appearance-none border border-jordy-blue-50  rounded w-full pb-20 px-3 text-jordy-blue-200 bg-jordy-blue-600 focus:bg-jordy-blue-700 focus:outline-none focus:ring-1 transition ease-in-out duration-150"
          }
        />
      </div>
      <button
        type="submit"
        className="w-full lg:max-w-32
         my-5 bg-jordy-blue-200 hover:bg-jordy-blue-300 text-jordy-blue-800  py-2 px-8 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
      {successMessage && (
        <div className="text-center text-jordy-blue-100 transition ease-in-out duration-150">
          {successMessage}
        </div>
      )}
    </form>
  );
};
