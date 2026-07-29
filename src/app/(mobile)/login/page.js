"use client";

import { useState } from "react";
import AuthLogoHeader from "@/components/auth/AuthLogoHeader";
import AuthTabs from "@/components/auth/AuthTabs";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import TrustBadges from "@/components/auth/TrustBadges";
import WaveDecoration from "@/components/auth/WaveDecoration";

export default function LoginPage() {
  const [tab, setTab] = useState("masuk");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="px-6">
        <AuthLogoHeader />

        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
          <AuthTabs tab={tab} onChange={setTab} />

          {tab === "masuk" ? (
            <LoginForm onSwitchToDaftar={() => setTab("daftar")} />
          ) : (
            <RegisterForm onSwitchToMasuk={() => setTab("masuk")} />
          )}
        </div>

        <TrustBadges />
      </div>

      <div className="mt-auto">
        <WaveDecoration />
      </div>
    </div>
  );
}
