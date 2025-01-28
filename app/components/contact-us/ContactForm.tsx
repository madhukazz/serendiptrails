'use client';
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
    name: string;
    email: string;
    message: string;
}

const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
};

const validationSchema = Yup.object({
    name: Yup.string()
        .max(50, "Name must be 50 characters or less")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    message: Yup.string()
        .max(500, "Message must be 500 characters or less")
        .required("Message is required"),
});

const ContactForm = () => {

    const handleSubmit = (values: FormValues) => {
    console.log(values);
    };

    const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6 mt-10">
        <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
                <label htmlFor="name" className="font-jost text-sm font-semibold text-gray-700 mb-3">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="outline-none bg-[#3eacac28] p-3 rounded-3xl text-paragraph border-primary text-sm font-jost font-medium"
                />
                {formik.touched.name && formik.errors.name ? (
                <span className="text-red-500 text-sm font-jost font-medium mt-3">{formik.errors.name}</span>
                ) : null}
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="font-jost text-sm font-semibold text-gray-700 mb-3">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="outline-none bg-[#3eacac28] p-3 rounded-3xl text-paragraph border-primary text-sm font-jost font-medium"
                />
                {formik.touched.email && formik.errors.email ? (
                <span className="text-red-500 text-sm font-jost font-medium mt-3">{formik.errors.email}</span>
                ) : null}
            </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="message" className="font-jost text-sm font-semibold text-gray-700 mb-3">Message</label>
            <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="outline-none bg-[#3eacac28] p-3 rounded-xl min-h-56 text-paragraph border-primary text-sm font-jost font-medium"
            />
            {formik.touched.message && formik.errors.message ? (
            <span className="text-red-500 text-sm font-jost font-medium mt-3">{formik.errors.message}</span>
            ) : null}
        </div>
        <button type="submit" className="button-style p-3 font-semibold rounded-3xl w-52">Send Message</button>
    </form>
  )
}

export default ContactForm