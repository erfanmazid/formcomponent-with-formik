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
        .matches(
          /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/,
          "هر کلمه باید تشکیل شده از حروف و هر کلمه حداقل سه حرف داشته باشد."
        )
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
        .max(11, "شماره تلفن باید ۱۱ رقم باشد."),
      address: Yup.string()
        .min(10, "آدرس باید حداقل شامل ۱۰ حرف باشد.")
        .required("آدرس الزامی است."),
      birthDate: Yup.string()
        .matches(
          /^\d{4}-\d{2}-\d{2}$/,
          "تاریخ تولد باید به صورت 1403/04/09 باید باشد."
        )
        .required("تاریخ تولد الزامی است."),
      personalCode: Yup.number().min(6, "کد پرسنلی باید حداقل ۶ رقم باشد."),
    }),
    onSubmit: (values) => {
      alert(`اطلاعات کاربر برابر: ${values}`);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="number"
            name="personalCode"
            id="personalCode"
            placeholder="کد پرسنلی"
            onChange={formik.handleChange}
            value={formik.values.personalCode}
          />
          {formik.errors.personalCode ? (
            <div>{formik.errors.personalCode}</div>
          ) : null}
        </div>
        <div>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="نام و نام‌خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
          {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}
        </div>
        <div>
          <input
            type="number"
            name="nationalCode"
            id="nationalCode"
            placeholder="نام و نام‌خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
          {formik.errors.nationalCode ? (
            <div>{formik.errors.nationalCode}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            name="nationalCode"
            id="nationalCode"
            placeholder="نام و نام‌خانوادگی"
            onChange={formik.handleChange}
            value={formik.values.nationalCode}
          />
          {formik.errors.nationalCode ? (
            <div>{formik.errors.nationalCode}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            name="birthDate"
            id="birthDate"
            placeholder="تاریخ تولد"
            onChange={formik.handleChange}
            value={formik.values.birthDate}
          />
          {formik.errors.birthDate ? (
            <div>{formik.errors.birthDate}</div>
          ) : null}
        </div>
        <div>
          <input
            type="number"
            name="email"
            id="email"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="شماره تلفن"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
        <div>
          <textarea
            type="text"
            name="address"
            id="address"
            placeholder="ایمیل"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        </div>
        <div>
          <button type="submit">ثبت</button>
        </div>
      </form>
    </>
  );
}
