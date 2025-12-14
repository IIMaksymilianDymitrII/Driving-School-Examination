import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "registrationForm";

export interface RegistrationFormData {
  studentId: string;
  personalNumber: string;   // YYYYMMDDNNNN
  firstName: string;
  lastName: string;
  street: string;
  apartment: string;
  postalCode: string;
  postArea: string;
  city: string;
  country: string;
  mobile: string;           // XXXXXXXXXX (10 digits)
  email: string;
  username: string;         // auto from email + DOB
  newsletter: boolean;
}

const defaultFormData: RegistrationFormData = {
  studentId: "",
  personalNumber: "",
  firstName: "",
  lastName: "",
  street: "",
  apartment: "",
  postalCode: "",
  postArea: "",
  city: "",
  country: "Sweden",
  mobile: "",
  email: "",
  username: "",
  newsletter: false,
};

// helper: generate student id once
const generateStudentId = () => {
  const now = Date.now().toString(36);
  const rand = Math.random().toString(36).substring(2, 6);
  return `STD-${now}-${rand}`.toUpperCase();
};

// helper: generate username from DOB (first 8 of personalNumber) + email local-part
const generateUsername = (personalNumber: string, email: string) => {
  const dob = personalNumber.slice(0, 8);
  const local = email.split("@")[0] || "";
  if (!dob || !local) return "";
  return `${local}_${dob}`;
};

interface RegistrationContextValue {
  formData: RegistrationFormData;
  updateField: (field: keyof RegistrationFormData, value: string | boolean) => void;
  resetForm: () => void;
}

const RegistrationFormContext = createContext<RegistrationContextValue | undefined>(
  undefined
);

export const RegistrationFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>(() => {
    // hydrate from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as RegistrationFormData;
        return {
          ...defaultFormData,
          ...parsed,
          studentId: parsed.studentId || generateStudentId(),
        };
      } catch {
        // ignore
      }
    }
    return { ...defaultFormData, studentId: generateStudentId() };
  });

  // auto-generate username when personalNumber or email changes
  useEffect(() => {
    const username = generateUsername(formData.personalNumber, formData.email);
    setFormData((prev) =>
      prev.username === username
        ? prev
        : {
            ...prev,
            username,
          }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.personalNumber, formData.email]);

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  const updateField: RegistrationContextValue["updateField"] = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    const newId = generateStudentId();
    const cleared: RegistrationFormData = {
      ...defaultFormData,
      studentId: newId,
    };
    setFormData(cleared);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleared));
  };

  return (
    <RegistrationFormContext.Provider value={{ formData, updateField, resetForm }}>
      {children}
    </RegistrationFormContext.Provider>
  );
};

export const useRegistrationFormContext = () => {
  const ctx = useContext(RegistrationFormContext);
  if (!ctx) {
    throw new Error("useRegistrationFormContext must be used within RegistrationFormProvider");
  }
  return ctx;
};
