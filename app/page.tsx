"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Circle,
  Download,
  Share2,
  Printer,
  Copy,
  Check,
  ArrowRight,
  ShieldAlert,
  FileText,
  Clock,
  Sparkles,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Smartphone,
  Tv,
  Laptop,
  Refrigerator
} from "lucide-react";

export default function LandingPage() {
  // Interactive checklist tracking
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleCheck = (stepNumber: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [stepNumber]: !prev[stepNumber],
    }));
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDownloadChecklist = () => {
    const content = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "claim-ready-checklist.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white text-[#363C47] font-sans antialiased selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* 1. TICKER STRIP (DESIGN.md) */}
      <div className="ticker-wrap w-full bg-[#EEFAF5] border-b border-[#B9E6D6] overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-ticker">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[#065F43] font-medium pr-10"
            >
              <span>CLAIM READY</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>A WARRANTY CLAIM IS DECIDED ON RECORDS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>15 STEPS IN THE CHECKLIST</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>KEEP YOURS, AND ASK FOR THEIRS IN WRITING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>4 RECORDS BEFORE ANYTHING GOES WRONG</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
              <span>IF IT IS NOT IN WRITING, IT DID NOT HAPPEN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
            </div>
          ))}
        </div>
      </div>

      {/* 2. STICKY HEADER (DESIGN.md) */}
      <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px]">
        <div className="max-w-[1180px] mx-auto h-full px-5 sm:px-10 flex items-center justify-between">
          {/* Logo Mark + Ink Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-full bg-[#087A58] flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm">
              CR
            </span>
            <span className="font-extrabold text-[19px] tracking-[-0.035em] text-[#0D1117]">
              CLAIM READY
            </span>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#5B6472]">
            <a href="#who-this-is-for" className="hover:text-[#0D1117] transition-colors">
              Who This Is For
            </a>
            <a href="#the-idea" className="hover:text-[#0D1117] transition-colors">
              The Idea
            </a>
            <a href="#checklist" className="hover:text-[#0D1117] transition-colors">
              Checklist
            </a>
            <a href="#refused" className="hover:text-[#0D1117] transition-colors">
              If Refused
            </a>
            <a href="#key-numbers" className="hover:text-[#0D1117] transition-colors">
              Key Numbers
            </a>
          </nav>

          {/* Action button */}
          <div className="flex items-center gap-3">
            <a
              href="#call-to-action"
              className="bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium py-[10px] px-[20px] rounded-full transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm"
            >
              Get Checklist
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* 3. HERO SECTION (DESIGN.md: Two columns desktop, copy left ~55%, visual right) */}
        <section className="pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Copy ~55% */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Eyebrow Pill Label */}
                <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  CONSUMER RIGHTS & EVIDENCE
                </div>

                {/* Headline Display */}
                <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-5">
                  CLAIM READY
                </h1>

                {/* Subtitle / Lead Paragraph */}
                <p className="text-[18px] sm:text-[20px] text-[#5B6472] font-normal leading-[1.72] max-w-[62ch] mb-8">
                  A free checklist for anyone about to file a warranty claim.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href="#checklist"
                    className="w-full sm:w-auto bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold py-[14px] px-[28px] rounded-full shadow-raised hover:-translate-y-[2px] transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    View 15-Step Checklist
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleDownloadChecklist}
                    className="w-full sm:w-auto bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold py-[14px] px-[28px] rounded-full hover:-translate-y-[2px] transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4 text-[#5B6472]" />
                    Save Offline Copy
                  </button>
                </div>

                {/* Progress bar pill if interactive checking is used */}
                {completedCount > 0 && (
                  <div className="mt-8 bg-[#EEFAF5] border border-[#B9E6D6] rounded-full px-4 py-2 flex items-center gap-3">
                    <span className="font-mono text-[11px] font-medium text-[#065F43] uppercase tracking-[0.16em]">
                      Your Progress: {completedCount} of 15 completed
                    </span>
                    <div className="w-24 h-2 bg-[#B9E6D6] rounded-full overflow-hidden">
                      <div
                        className="bg-[#087A58] h-full transition-all duration-300"
                        style={{ width: `${(completedCount / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Visual Document Card (DESIGN.md) */}
              <div className="lg:col-span-5">
                <div className="bg-white border border-[#E7EAEF] rounded-[18px] p-7 sm:p-8 shadow-card relative hover:-translate-y-1 hover:shadow-raised transition-all duration-300">
                  {/* Card Header metadata */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#E7EAEF] mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#087A58]" />
                      <span className="font-mono text-[11px] font-medium text-[#5B6472] uppercase tracking-[0.16em]">
                        DOCUMENT REF · CR-2026
                      </span>
                    </div>
                    <span className="bg-[#EEFAF5] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border border-[#B9E6D6]">
                      VERIFIED FACT
                    </span>
                  </div>

                  {/* Quoted line */}
                  <div className="mb-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#697382] mb-2">
                      CORE OPERATING PRINCIPLE
                    </p>
                    <blockquote className="text-[20px] font-extrabold text-[#0D1117] tracking-tight leading-snug">
                      “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
                    </blockquote>
                  </div>

                  {/* Evidence Checklist Mini Table */}
                  <div className="bg-[#F7F8FA] rounded-[12px] p-4 border border-[#E7EAEF] mb-6 space-y-2.5">
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-medium text-[#363C47]">Proof of Purchase (Invoice)</span>
                      <span className="font-mono text-[11px] text-[#087A58] font-bold">REQUIRED</span>
                    </div>
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-medium text-[#363C47]">Written Complaint Number</span>
                      <span className="font-mono text-[11px] text-[#087A58] font-bold">REQUIRED</span>
                    </div>
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-medium text-[#363C47]">Technician Job Sheet Copy</span>
                      <span className="font-mono text-[11px] text-[#087A58] font-bold">REQUIRED</span>
                    </div>
                    <div className="flex items-center justify-between text-[13.5px]">
                      <span className="font-medium text-[#363C47]">Formal Written Explanation</span>
                      <span className="font-mono text-[11px] text-[#087A58] font-bold">REQUIRED</span>
                    </div>
                  </div>

                  {/* Document Card Footer */}
                  <div className="flex items-center justify-between text-[13.5px] text-[#697382]">
                    <span className="font-mono text-[11px]">STANDARDIZED GUIDE</span>
                    <a
                      href="#checklist"
                      className="text-[#087A58] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Inspect steps <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HEADLINE CARD: THE IDEA IN ONE LINE (DESIGN.md: dark ink panel 26px radius, scanlines, bright emerald) */}
        <section id="the-idea" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Section Header */}
            <div className="mb-10 text-center sm:text-left">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                THE IDEA IN ONE LINE
              </div>
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                THE IDEA IN ONE LINE
              </h2>
            </div>

            {/* Headline Card Component */}
            <div className="relative overflow-hidden bg-[#0D1117] text-white rounded-[26px] p-8 sm:p-12 lg:p-16 shadow-raised border border-white/10 scanlines-texture">
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#34D399] font-medium mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  FOUNDATIONAL MANDATE
                </div>

                <p className="font-mono text-[22px] sm:text-[32px] lg:text-[40px] font-bold text-[#34D399] tracking-tight leading-[1.2] mb-6">
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </p>

                <p className="text-white/70 text-[15px] sm:text-[17px] leading-[1.72] max-w-[68ch]">
                  Phone calls leave room for dispute. Spoken promises cannot be examined by a consumer court or supervisor. Every interaction must be logged with date, names, and physical or electronic documents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR (DESIGN.md: Callout card mint fill with emerald border) */}
        <section id="who-this-is-for" className="py-20 sm:py-28 border-b border-[#E7EAEF] bg-white">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Section Header Stack */}
            <div className="mb-10">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                AUDIENCE & SCOPE
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                WHO THIS IS FOR
              </h2>
            </div>

            {/* Callout Card */}
            <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 sm:p-10 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="space-y-4 max-w-[72ch]">
                  <p className="text-[20px] sm:text-[23px] font-bold text-[#065F43] leading-[1.4] tracking-tight">
                    Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
                  </p>
                  <p className="text-[16px] text-[#065F43]/85 leading-[1.72]">
                    Whether you are negotiating with a multinational brand or a local distributor, this protocol equips you to hold manufacturers accountable to their stated terms and consumer protection laws.
                  </p>
                </div>

                {/* Hardware device pills */}
                <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                  <div className="bg-white/80 border border-[#B9E6D6] rounded-[12px] p-3.5 flex items-center gap-3">
                    <Smartphone className="w-5 h-5 text-[#087A58]" />
                    <span className="font-semibold text-[14px] text-[#0D1117]">Phones</span>
                  </div>
                  <div className="bg-white/80 border border-[#B9E6D6] rounded-[12px] p-3.5 flex items-center gap-3">
                    <Tv className="w-5 h-5 text-[#087A58]" />
                    <span className="font-semibold text-[14px] text-[#0D1117]">TVs</span>
                  </div>
                  <div className="bg-white/80 border border-[#B9E6D6] rounded-[12px] p-3.5 flex items-center gap-3">
                    <Laptop className="w-5 h-5 text-[#087A58]" />
                    <span className="font-semibold text-[14px] text-[#0D1117]">Laptops</span>
                  </div>
                  <div className="bg-white/80 border border-[#B9E6D6] rounded-[12px] p-3.5 flex items-center gap-3">
                    <Refrigerator className="w-5 h-5 text-[#087A58]" />
                    <span className="font-semibold text-[14px] text-[#0D1117]">Appliances</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. KEY NUMBERS FOR THE PAGE (DESIGN.md: Stat Grid with 1px hairline gaps, hot cell in emerald) */}
        <section id="key-numbers" className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Section Header Stack */}
            <div className="mb-12">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                AT A GLANCE
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                KEY NUMBERS FOR THE PAGE
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72] max-w-[62ch]">
                Three baseline figures to remember throughout the entire warranty claim lifecycle.
              </p>
            </div>

            {/* Stat grid joined by 1px hairline gaps inside one rounded card (DESIGN.md) */}
            <div className="rounded-[18px] overflow-hidden bg-[#E7EAEF] p-[1px] shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
                {/* Cell 1 */}
                <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#697382] font-medium block mb-2">
                      COMPLETE CHECKLIST
                    </span>
                    <div className="font-extrabold text-[44px] sm:text-[52px] leading-none text-[#0D1117] tracking-[-0.035em] tabular-nums mb-3">
                      15
                    </div>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-medium text-[#5B6472]">
                    steps in the checklist.
                  </p>
                </div>

                {/* Cell 2 */}
                <div className="bg-white p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#697382] font-medium block mb-2">
                      BASELINE DOCUMENTATION
                    </span>
                    <div className="font-extrabold text-[44px] sm:text-[52px] leading-none text-[#0D1117] tracking-[-0.035em] tabular-nums mb-3">
                      4
                    </div>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-medium text-[#5B6472]">
                    records to keep before anything goes wrong.
                  </p>
                </div>

                {/* Cell 3: The HOT cell (DESIGN.md: text-primary for the number) */}
                <div className="bg-white p-7 sm:p-9 flex flex-col justify-between border-t md:border-t-0 border-[#E7EAEF]">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#087A58] font-semibold block mb-2">
                      THE CARDINAL STANDARD
                    </span>
                    <div className="font-extrabold text-[44px] sm:text-[52px] leading-none text-[#087A58] tracking-[-0.035em] tabular-nums mb-3">
                      1
                    </div>
                  </div>
                  <p className="text-[14px] sm:text-[15px] font-semibold text-[#065F43]">
                    rule: if it is not in writing, it did not happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CHECKLIST SECTION 1: BEFORE ANYTHING GOES WRONG */}
        <section id="checklist" className="py-20 sm:py-28 border-b border-[#E7EAEF] bg-white">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CHECKLIST · PART 01
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                BEFORE ANYTHING GOES WRONG
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72] max-w-[62ch]">
                Establish your paper trail before you ever need service.
              </p>
            </div>

            {/* Grid of Cards (2 cols from 640px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div
                onClick={() => toggleCheck(1)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[1] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    01
                  </div>
                  <button
                    aria-label="Toggle step 1"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[1] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  1. Keep the invoice.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                </p>
              </div>

              {/* Item 2 */}
              <div
                onClick={() => toggleCheck(2)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[2] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    02
                  </div>
                  <button
                    aria-label="Toggle step 2"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[2] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  2. Register the product.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Many brands ask you to register on their website or app; some add extra warranty when you do.
                </p>
              </div>

              {/* Item 3 */}
              <div
                onClick={() => toggleCheck(3)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[3] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    03
                  </div>
                  <button
                    aria-label="Toggle step 3"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[3] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  3. Read the warranty card once.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Note how long it lasts, what it covers, and what it excludes.
                </p>
              </div>

              {/* Item 4 */}
              <div
                onClick={() => toggleCheck(4)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[4] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    04
                  </div>
                  <button
                    aria-label="Toggle step 4"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[4] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  4. Record the condition.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Take a few dated photos of the product once it is installed or unboxed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CHECKLIST SECTION 2: WHEN THE FAULT APPEARS */}
        <section className="py-20 sm:py-28 bg-[#F7F8FA] border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CHECKLIST · PART 02
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                WHEN THE FAULT APPEARS
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72] max-w-[62ch]">
                Timely, objective records prevent disputes over when and how the defect manifested.
              </p>
            </div>

            {/* Grid of Cards (3 cols on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 5 */}
              <div
                onClick={() => toggleCheck(5)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[5] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    05
                  </div>
                  <button
                    aria-label="Toggle step 5"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[5] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  5. Record the fault.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                </p>
              </div>

              {/* Item 6 */}
              <div
                onClick={() => toggleCheck(6)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[6] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    06
                  </div>
                  <button
                    aria-label="Toggle step 6"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[6] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  6. Raise the complaint in writing.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
                </p>
              </div>

              {/* Item 7 */}
              <div
                onClick={() => toggleCheck(7)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[7] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    07
                  </div>
                  <button
                    aria-label="Toggle step 7"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[7] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  7. Note every reference number.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Write down the complaint or ticket number, the date and the name of anyone you speak to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CHECKLIST SECTION 3: WHEN A TECHNICIAN VISITS */}
        <section className="py-20 sm:py-28 bg-white border-b border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                CHECKLIST · PART 03
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                WHEN A TECHNICIAN VISITS
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-[#5B6472] leading-[1.72] max-w-[62ch]">
                Ensure technical observations and diagnostics are recorded verbatim on the spot.
              </p>
            </div>

            {/* Grid of Cards (3 cols on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Item 8 */}
              <div
                onClick={() => toggleCheck(8)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[8] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    08
                  </div>
                  <button
                    aria-label="Toggle step 8"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[8] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  8. Ask for the job sheet.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Ask the technician for a copy of the visit report or job sheet before they leave.
                </p>
              </div>

              {/* Item 9 */}
              <div
                onClick={() => toggleCheck(9)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[9] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    09
                  </div>
                  <button
                    aria-label="Toggle step 9"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[9] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  9. Ask what was tested.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Ask which test or instrument was used to reach the diagnosis.
                </p>
              </div>

              {/* Item 10 */}
              <div
                onClick={() => toggleCheck(10)}
                className={`cursor-pointer bg-white border rounded-[18px] p-7 transition-all duration-200 shadow-card hover:shadow-raised hover:-translate-y-0.5 ${
                  checkedItems[10] ? "border-[#087A58] bg-[#EEFAF5]/30" : "border-[#E7EAEF]"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#F2F4F7] flex items-center justify-center font-mono font-bold text-[14px] text-[#0D1117]">
                    10
                  </div>
                  <button
                    aria-label="Toggle step 10"
                    className="text-[#087A58] hover:scale-110 transition-transform"
                  >
                    {checkedItems[10] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#087A58] text-white" />
                    ) : (
                      <Circle className="w-6 h-6 text-[#D6DBE3]" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-[#0D1117] mb-2 leading-snug">
                  10. Take your own photos.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-[#5B6472] leading-[1.6]">
                  Photograph the product and anything the technician points to, during the visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CHECKLIST SECTION 4: IF THE CLAIM IS REFUSED (DESIGN.md: DARK SECTION) */}
        {/* DESIGN.md: ink background, white headlines, bright emerald labels, inner panels white at 10% opacity */}
        <section id="refused" className="py-20 sm:py-28 lg:py-[130px] bg-[#0D1117] text-white">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
            {/* Header Stack */}
            <div className="mb-14">
              <div className="bg-[#34D399]/15 border border-[#34D399]/30 text-[#34D399] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                CHECKLIST · PART 04 (ESCALATION)
              </div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[47px] font-extrabold text-white tracking-[-0.035em] leading-[1.06] mb-4">
                IF THE CLAIM IS REFUSED
              </h2>
              <p className="text-[17.5px] sm:text-[20px] text-white/70 leading-[1.72] max-w-[62ch]">
                A refusal is not the end of the procedure. Switch strictly to formal records and procedural escalation.
              </p>
            </div>

            {/* Inner Panels in white at 10% opacity (DESIGN.md) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Item 11 */}
              <div
                onClick={() => toggleCheck(11)}
                className={`cursor-pointer bg-white/10 hover:bg-white/[0.14] border rounded-[18px] p-7 transition-all duration-200 ${
                  checkedItems[11] ? "border-[#34D399] bg-white/[0.18]" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono font-bold text-[14px] text-[#34D399]">
                    11
                  </div>
                  <button
                    aria-label="Toggle step 11"
                    className="text-[#34D399] hover:scale-110 transition-transform"
                  >
                    {checkedItems[11] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-2 leading-snug">
                  11. Ask for the reason in writing.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6]">
                  Request a written explanation that names the exact cause and the evidence for it.
                </p>
              </div>

              {/* Item 12 */}
              <div
                onClick={() => toggleCheck(12)}
                className={`cursor-pointer bg-white/10 hover:bg-white/[0.14] border rounded-[18px] p-7 transition-all duration-200 ${
                  checkedItems[12] ? "border-[#34D399] bg-white/[0.18]" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono font-bold text-[14px] text-[#34D399]">
                    12
                  </div>
                  <button
                    aria-label="Toggle step 12"
                    className="text-[#34D399] hover:scale-110 transition-transform"
                  >
                    {checkedItems[12] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-2 leading-snug">
                  12. Ask for the technical report.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6]">
                  If the refusal rests on an inspection, ask for that inspection report.
                </p>
              </div>

              {/* Item 13 */}
              <div
                onClick={() => toggleCheck(13)}
                className={`cursor-pointer bg-white/10 hover:bg-white/[0.14] border rounded-[18px] p-7 transition-all duration-200 ${
                  checkedItems[13] ? "border-[#34D399] bg-white/[0.18]" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono font-bold text-[14px] text-[#34D399]">
                    13
                  </div>
                  <button
                    aria-label="Toggle step 13"
                    className="text-[#34D399] hover:scale-110 transition-transform"
                  >
                    {checkedItems[13] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-2 leading-snug">
                  13. Escalate inside the company.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6]">
                  Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                </p>
              </div>

              {/* Item 14 */}
              <div
                onClick={() => toggleCheck(14)}
                className={`cursor-pointer bg-white/10 hover:bg-white/[0.14] border rounded-[18px] p-7 transition-all duration-200 ${
                  checkedItems[14] ? "border-[#34D399] bg-white/[0.18]" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono font-bold text-[14px] text-[#34D399]">
                    14
                  </div>
                  <button
                    aria-label="Toggle step 14"
                    className="text-[#34D399] hover:scale-110 transition-transform"
                  >
                    {checkedItems[14] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-2 leading-snug">
                  14. Keep it factual.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6]">
                  Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                </p>
              </div>

              {/* Item 15 */}
              <div
                onClick={() => toggleCheck(15)}
                className={`cursor-pointer bg-white/10 hover:bg-white/[0.14] border rounded-[18px] p-7 transition-all duration-200 md:col-span-2 lg:col-span-2 ${
                  checkedItems[15] ? "border-[#34D399] bg-white/[0.18]" : "border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-mono font-bold text-[14px] text-[#34D399]">
                    15
                  </div>
                  <button
                    aria-label="Toggle step 15"
                    className="text-[#34D399] hover:scale-110 transition-transform"
                  >
                    {checkedItems[15] ? (
                      <CheckCircle2 className="w-6 h-6 fill-[#34D399] text-[#0D1117]" />
                    ) : (
                      <Circle className="w-6 h-6 text-white/40" />
                    )}
                  </button>
                </div>
                <h3 className="text-[19px] font-bold text-white mb-2 leading-snug">
                  15. Know your consumer helpline.
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/80 leading-[1.6]">
                  Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. CALL TO ACTION SECTION (DESIGN.md: shell-narrow 880px, emerald pill button, input styling) */}
        <section id="call-to-action" className="py-20 sm:py-28 bg-white border-b border-[#E7EAEF]">
          <div className="max-w-[880px] mx-auto px-5 sm:px-10 text-center sm:text-left">
            {/* Header Stack */}
            <div className="mb-12">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] font-medium uppercase tracking-[0.16em] rounded-full py-[6px] px-[14px] inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                NEXT STEPS
              </div>
              <h2 className="text-[28px] sm:text-[38px] lg:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06] mb-4">
                CALL TO ACTION
              </h2>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Action 1 */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 sm:p-8 shadow-card flex flex-col justify-between hover:shadow-raised transition-all">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-5">
                    <Download className="w-5 h-5" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0D1117] mb-3">
                    Download the checklist and keep it with your invoices.
                  </h3>
                  <p className="text-[15px] text-[#5B6472] leading-[1.6] mb-6">
                    Have the complete 15-step protocol stored offline on your phone or printed alongside your physical product bills.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleDownloadChecklist}
                    className="bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold py-[14px] px-[28px] rounded-full shadow-raised hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Checklist
                  </button>
                  <button
                    onClick={handlePrint}
                    className="bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold py-[14px] px-[20px] rounded-full hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Printer className="w-4 h-4 text-[#5B6472]" />
                    Print
                  </button>
                </div>
              </div>

              {/* Action 2 */}
              <div className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-7 sm:p-8 shadow-card flex flex-col justify-between hover:shadow-raised transition-all">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center mb-5">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0D1117] mb-3">
                    Share it with a friend who just bought something expensive.
                  </h3>
                  <p className="text-[15px] text-[#5B6472] leading-[1.6] mb-6">
                    A phone, TV, or laptop purchase is the exact moment to start logging records before accidental damage or faults arise.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={handleCopyLink}
                    className="w-full bg-white hover:bg-[#F7F8FA] border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold py-[14px] px-[28px] rounded-full hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-[#087A58]" />
                        Link Copied to Clipboard
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#5B6472]" />
                        Copy Shareable Link
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Email backup form conforming to DESIGN.md input spec */}
            <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 sm:p-8">
              <div className="max-w-[620px]">
                <h4 className="text-[17px] font-bold text-[#065F43] mb-2">
                  Send a copy directly to your inbox
                </h4>
                <p className="text-[14px] text-[#065F43]/85 mb-4">
                  Keep a permanent email copy to forward to service centres or technicians whenever needed.
                </p>
                {subscribed ? (
                  <div className="bg-white border border-[#B9E6D6] rounded-[12px] p-3.5 text-[#065F43] font-medium text-[14px] flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#087A58]" />
                    Checklist copy dispatched. Save it into your receipts folder!
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (emailInput) setSubscribed(true);
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="flex-1 bg-[#F2F4F7] border border-[#D6DBE3] text-[#0D1117] text-[15px] rounded-[12px] h-[44px] px-3.5 focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold h-[44px] px-6 rounded-full shadow-raised hover:-translate-y-0.5 transition-all"
                    >
                      Send Checklist
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER (DESIGN.md: mist background, 1px top hairline, 3 columns, 13px legal note) */}
      <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E7EAEF]">
            {/* Column 1: About */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-full bg-[#087A58] flex items-center justify-center text-white font-mono font-bold text-xs">
                  CR
                </span>
                <span className="font-extrabold text-[17px] tracking-[-0.035em] text-[#0D1117]">
                  CLAIM READY
                </span>
              </div>
              <p className="text-[14px] text-[#5B6472] leading-[1.6] max-w-[42ch]">
                A free, editorial checklist for consumers navigating electronic and appliance warranty disputes. Calm, factual, and strictly evidence-backed.
              </p>
            </div>

            {/* Column 2: Pages / Sections */}
            <div className="md:col-span-4 space-y-3">
              <h5 className="font-mono text-[11px] font-semibold text-[#0D1117] uppercase tracking-[0.16em]">
                CHECKLIST SECTIONS
              </h5>
              <ul className="space-y-2 text-[14px] text-[#5B6472]">
                <li>
                  <a href="#checklist" className="hover:text-[#087A58] transition-colors">
                    Before Anything Goes Wrong (Steps 1–4)
                  </a>
                </li>
                <li>
                  <a href="#checklist" className="hover:text-[#087A58] transition-colors">
                    When the Fault Appears (Steps 5–7)
                  </a>
                </li>
                <li>
                  <a href="#checklist" className="hover:text-[#087A58] transition-colors">
                    When a Technician Visits (Steps 8–10)
                  </a>
                </li>
                <li>
                  <a href="#refused" className="hover:text-[#087A58] transition-colors">
                    If the Claim Is Refused (Steps 11–15)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Summary Key Principles */}
            <div className="md:col-span-3 space-y-3">
              <h5 className="font-mono text-[11px] font-semibold text-[#0D1117] uppercase tracking-[0.16em]">
                CORE RULES
              </h5>
              <div className="bg-white border border-[#E7EAEF] rounded-[12px] p-4 text-[13px] text-[#5B6472] space-y-2">
                <p className="font-medium text-[#0D1117]">Rule 01: In Writing</p>
                <p>If an agreement or refusal is not documented, it cannot be legally referenced.</p>
              </div>
            </div>
          </div>

          {/* FOOTER NOTE (From content.txt verbatim!) */}
          <div className="pt-8">
            <p className="text-[13px] text-[#697382] leading-relaxed">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
