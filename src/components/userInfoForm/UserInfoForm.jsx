import { useFormik } from "formik";
import * as Yup from "yup";

export default function UserInfoForm() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      nationalCode: "",
      email: "",
      phoneNumber: "",
      address: "",
      birthDate: "",
      personalCode: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        // .matches(
        //   /^[a-zA-Z]{3} [a-zA-Z]{3}$/,
        //   "هر کلمه باید تشکیل شده از حروف و هر کلمه حداقل سه حرف داشته باشد."
        // )
        .min(3, "هر کلمه حداقل سه حرف باشد")
        .required("نام و نام خانوادگی الزامی است."),
      nationalCode: Yup.number()
        .min(10, "کد ملی باید شامل ۱۰ رقم باشد.")
        .required("کد ملی الزامی است."),
      email: Yup.string()
        .email("ایمیل به صورت نادرست وارد شده است.")
        .required("ایمیل الزامی است."),
      phoneNumber: Yup.string()
        .matches(/^09[0-9]+$/, "شماره تماس باید فقط عدد باشد.")
        .min(11, "شماره تلفن باید ۱۱ رقم باشد.")
        .max(11, "شماره تلفن باید ۱۱ رقم باشد.")
        .required("شماره تلفن الزامیست"),
      address: Yup.string()
        .min(10, "آدرس باید حداقل شامل ۱۰ حرف باشد.")
        .required("آدرس الزامی است."),
      birthDate: Yup.string()
        .matches(
          /^\d{4}[/]\d{2}[/]\d{2}$/,
          "تاریخ تولد باید به صورت 1403/04/09 باید باشد."
        )
        .required("تاریخ تولد الزامی است."),
      personalCode: Yup.string()
        .min(6, "کد پرسنلی باید حداقل ۶ رقم باشد.")
        .required("کد پرسنلی الزامی است"),
    }),
    onSubmit: (values) => {
      alert(`اطلاعات کاربر برابر: ${values}`);
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="w-screen grid grid-cols-3 gap-x-4 gap-y-4"
      >
        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="number"
            name="personalCode"
            id="personalCode"
            placeholder="کد پرسنلی"
            onChange={formik.handleChange}
            value={formik.values.personalCode}
          />
          {formik.touched.personalCode && formik.errors.personalCode ? (
            <div className="text-red-500">{formik.errors.personalCode}</div>
          ) : null}
        </div>
        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="نام و نام‌خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500">{formik.errors.fullName}</div>
          ) : null}
        </div>
        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="number"
            name="nationalCode"
            id="nationalCode"
            placeholder="کد ملی"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
          {formik.touched.nationalCode && formik.errors.nationalCode ? (
            <div className="text-red-500">{formik.errors.nationalCode}</div>
          ) : null}
        </div>

        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="text"
            name="birthDate"
            id="birthDate"
            placeholder="تاریخ تولد"
            onChange={formik.handleChange}
            value={formik.values.birthDate}
          />
          {formik.touched.birthDate && formik.errors.birthDate ? (
            <div className="text-red-500">{formik.errors.birthDate}</div>
          ) : null}
        </div>
        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="email"
            name="email"
            id="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="شماره تلفن"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div className="text-red-500">{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div>
          <textarea
            className="border-2 rounded-xl p-2 focus:outline-none focus:border-2 focus:border-purple-800 resize-none w-[400px] h-[100px]"
            type="text"
            name="address"
            id="address"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
        </div>

        <button type="submit" className="mr-20">
          ثبت
        </button>
      </form>
    </>
  );
}
