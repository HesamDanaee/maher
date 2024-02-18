"use client";
import React from "react";
import { useToastStore } from "@/stores/toastStore";

const Toast: React.FC = () => {
  const { toastVisible, message, type } = useToastStore();

  const getTypeClass = () => {
    switch (type) {
      case "success":
        return "alert-success";
      case "warning":
        return "alert-warning";
      case "error":
        return "alert-error";
      default:
        return "";
    }
  };

  return (
    <div
      className={`toast toast-bottom toast-end ${
        toastVisible ? "visible" : "hidden"
      }`}
    >
      <div className={`alert ${getTypeClass()}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
