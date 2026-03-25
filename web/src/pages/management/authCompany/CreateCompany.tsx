import { useState } from "react";

type LegalType = "PT" | "CV" | "Others";
type BussinessSector =
  | "Retail"
  | "Wholesale"
  | "Services"
  | "Food & Beverage"
  | "Others";

type CreateCompanyProps = {
  onCompanyCreated?: () => void;
};

function CreateCompany({ onCompanyCreated }: CreateCompanyProps) {
  const [companyName, setCompanyName] = useState<string>("");
  const [legalType, setLegalType] = useState<LegalType | "">("");
  const [bussinessSector, setBussinessSector] = useState<BussinessSector | "">(
    "",
  );
  const [addressCompany, setAddressCompany] = useState<string>("");
  const [phoneNumberCompany, setPhoneNumberCompany] = useState<string>("");
  const [emailCompany, setEmailCompany] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalMsg, setModalMsg] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState("");

  const iscompanyName = companyName.length >= 3;
  const isphoneNumberCompany = /^(08|62)\d{8,11}$/.test(phoneNumberCompany);
  const isEmailCompanyValid =
    emailCompany.includes("@") && emailCompany.includes(".");
  const isAddressCompanyValid = addressCompany.length >= 5;
  const isLegalTypeValid = legalType !== "";
  const isSectorValid = bussinessSector !== "";

  const canRegisterCompanyValid =
    iscompanyName &&
    isphoneNumberCompany &&
    isEmailCompanyValid &&
    isAddressCompanyValid &&
    isLegalTypeValid &&
    isSectorValid;

  const handleCreateCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: companyName,
          legalType,
          bussinessSector,
          address: addressCompany,
          phone: phoneNumberCompany,
          email: emailCompany,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setAlert("CREATE COMPANY SUCCESS");
        setShowModal(true);
        setModalMsg("Your Company has been created successfully.");
        onCompanyCreated?.();
      } else {
        setAlert("CREATE COMPANY FAIL");
        setShowModal(true);
        setModalMsg(`${data.message}`);
      }
    } catch (error) {
      setAlert("CREATE COMPANY SUCCESS");
      console.error("Connection Error:", error);
      setModalMsg("Connection error");
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-full bg-linear-to-br from-slate-50 to-blue-50 p-5 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Company Onboarding
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mt-1">
            Create Company Profile
          </h1>
          <p className="text-sm text-slate-600 mt-1.5">
            Register your core business profile to activate product setup,
            transaction tracking, and team access management.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
          <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-5">
            <div>
              <h2 className="text-base md:text-lg font-semibold text-slate-900">
                Company Information
              </h2>
              <p className="text-sm text-slate-500">
                Legal identity and official contact details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="form-control w-full md:col-span-2">
                <span className="label-text font-medium mb-2">
                  Company Name{" "}
                </span>
                <input
                  className="input input-bordered w-full"
                  placeholder="Company Name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text font-medium mb-2">Legal Form </span>
                <select
                  className="select select-bordered"
                  value={legalType}
                  onChange={(e) => setLegalType(e.target.value as LegalType)}
                >
                  <option value="" disabled>
                    Select Legal Form
                  </option>
                  <option>PT</option>
                  <option>CV</option>
                  <option>Individual Business</option>
                </select>
              </label>

              <label className="form-control w-full">
                <span className="label-text font-medium mb-2 col-span-1">
                  Business Sector{" "}
                </span>
                <select
                  className="select select-bordered"
                  value={bussinessSector}
                  onChange={(e) =>
                    setBussinessSector(e.target.value as BussinessSector)
                  }
                >
                  <option value="" disabled>
                    Select Business Sector
                  </option>
                  <option>Retail</option>
                  <option>Wholesale</option>
                  <option>Services</option>
                  <option>Food & Beverage</option>
                  <option>Others</option>
                </select>
              </label>

              <label className="form-control w-full md:col-span-2">
                <span className="label-text font-medium mb-2">Address </span>
                <textarea
                  className="textarea textarea-bordered w-full min-h-36"
                  rows={6}
                  placeholder="Street, city, province, postal code"
                  value={addressCompany}
                  onChange={(e) => setAddressCompany(e.target.value)}
                />
                {!isAddressCompanyValid && addressCompany.length > 0 && (
                  <p className="text-xs text-red-500">
                    Please enter a valid address
                  </p>
                )}
              </label>

              <label className="form-control w-full">
                <span className="label-text font-medium mb-2">
                  Phone Number{" "}
                </span>
                <input
                  className="input input-bordered"
                  placeholder="Phone Number"
                  type="tel"
                  value={phoneNumberCompany}
                  onChange={(e) => setPhoneNumberCompany(e.target.value)}
                />
                {!isphoneNumberCompany && phoneNumberCompany.length > 0 && (
                  <p className="text-xs text-red-500">
                    Please enter a valid phone number
                  </p>
                )}
              </label>

              <label className="form-control w-full">
                <span className="label-text font-medium mb-2">
                  Company Email{" "}
                </span>
                <input
                  className="input input-bordered"
                  placeholder="hello@company.com"
                  type="email"
                  value={emailCompany}
                  onChange={(e) => setEmailCompany(e.target.value)}
                />
                {!isEmailCompanyValid && emailCompany.length > 0 && (
                  <p className="text-xs text-red-500">
                    Please enter a valid email address
                  </p>
                )}
              </label>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                className="btn btn-primary btn-sm w-fit"
                disabled={!canRegisterCompanyValid || isLoading}
                onClick={handleCreateCompany}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner"></span>
                  </>
                ) : (
                  "Create Company"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={`modal ${showModal ? "modal-open" : ""}`}>
          <div className="modal-box">
            <h3 className="font-bold text-lg ">{alert}</h3>
            <p className="py-4">{modalMsg}</p>
            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => setShowModal(false)}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default CreateCompany;
