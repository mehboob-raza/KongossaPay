"use client"


import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SelectDropdown } from "./SelectDropdown";

const currencies = [
  { code: "CAD", flag: "/icons/Svgs/ca.svg", rate: 1 },
  { code: "GBP", flag: "/icons/Svgs/gb.svg", rate: 0.58 },
  { code: "USD", flag: "/icons/Svgs/us.svg", rate: 0.75 },
  { code: "EUR", flag: "/icons/Svgs/eu.svg", rate: 0.68 },
  { code: "NGN", flag: "/icons/Svgs/ng.svg", rate: 1620 },
  { code: "INR", flag: "/icons/Svgs/in.svg", rate: 62 },
];

const promoCurrenciesRecieve = [
  { code: "NGN", flag: "/icons/Svgs/ng.svg", rate: 1620 },
  { code: "INR", flag: "/icons/Svgs/in.svg", rate: 62 },
];

const standardCurrenciesRecieve = [
  { code: "NGN", flag: "/icons/Svgs/ng.svg", rate: 1620 },
  { code: "INR", flag: "/icons/Svgs/in.svg", rate: 62 },
  { code: "XOF", flag: "/icons/Svgs/xof.svg", rate: 655 },
  { code: "UGX", flag: "/icons/Svgs/ugx.svg", rate: 3700 },
  { code: "GHS", flag: "/icons/Svgs/ghs.svg", rate: 11 },
  { code: "KES", flag: "/icons/Svgs/kes.svg", rate: 130 },
  { code: "GBP", flag: "/icons/Svgs/gb.svg", rate: 0.58 },
  { code: "EUR", flag: "/icons/Svgs/eu.svg", rate: 0.68 },
  { code: "USD", flag: "/icons/Svgs/us.svg", rate: 0.75 },
  { code: "PHP", flag: "/icons/Svgs/php.svg", rate: 56 },
  { code: "GNF", flag: "/icons/Svgs/gnf.svg", rate: 8600 },
  { code: "XAF", flag: "/icons/Svgs/xaf.svg", rate: 655 },
  { code: "MXN", flag: "/icons/Svgs/mxn.svg", rate: 17 },
  { code: "AUD", flag: "/icons/Svgs/aud.svg", rate: 1.5 },
];

export default function MoneyTransfer() {
  const { control } = useForm();
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[3]); // Default to EUR
  const [selectedMode, setSelectedMode] = useState("Promo"); // Default mode: Promo
  const [targetCurrency, setTargetCurrency] = useState(promoCurrenciesRecieve[0]); // Default receiving currency
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Update target currency when switching modes
  useEffect(() => {
    const newReceiveCurrencies = selectedMode === "Promo" ? promoCurrenciesRecieve : standardCurrenciesRecieve;
    setTargetCurrency(newReceiveCurrencies[0]); // Reset to the first currency of the selected mode
  }, [selectedMode]);

  // Currency conversion logic
  useEffect(() => {
    if (amount > 0 && selectedCurrency && targetCurrency) {
      const conversion = (amount * targetCurrency.rate) / selectedCurrency.rate;
      setConvertedAmount(conversion);
    } else {
      setConvertedAmount(0);
    }
  }, [amount, selectedCurrency, targetCurrency]);

  return (
    <div className="flex justify-center items-start  text-black">
      <Card className="w-full max-w-md bg-[#ffffff05] backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/5">
        {/* Mode Selection - Modern Fintech Toggle */}
        <div className="relative px-6 pb-0">
          <div className="bg-[#ffffff08] rounded-2xl p-1.5 max-w-[400px] mx-auto flex justify-center">
            <button
              className={`flex-1 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                selectedMode === "Promo"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                  : "text-black/80 hover:text-black"
              }`}
              onClick={() => setSelectedMode("Promo")}
            >
              Promo Rate
            </button>
            <button
              className={`flex-1 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                selectedMode === "Standard"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                  : "text-black/80 hover:text-black"
              }`}
              onClick={() => setSelectedMode("Standard")}
            >
              Standard Rate
            </button>
          </div>
        </div>

        <CardContent className="px-6 space-y-6">
          {/* Send Money - Fintech Style Card */}
          <div className="group rounded-2xl px-3 py-2 border-2 border-blue-500/30 transition-all duration-300">
            <label className="block text-sm text-black/80 font-medium mb-3">
              You Send
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-transparent text-3xl text-black font-light outline-none placeholder-gray-600"
                placeholder="0.00"
              />
              <div className="flex-shrink-0">
                <SelectDropdown
                  label=""
                  name="fromCurrency"
                  options={currencies.map((currency) => ({
                    value: currency.code,
                    label: currency.code,
                    flag: currency.flag,
                  }))}
                  control={control}
                  onValueChange={(code) => {
                    const newCurrency = currencies.find((c) => c.code === code);
                    setSelectedCurrency(newCurrency);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Receive Money - Fintech Style Card */}
          <div className="group rounded-2xl px-3 py-2 border-2 border-blue-500/30 transition-all duration-300">
            <label className="block text-sm text-black/80 font-medium mb-3">
              They Receive
            </label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={convertedAmount.toFixed(2)}
                disabled
                className="w-full bg-transparent text-3xl text-black font-light outline-none"
              />
              <div className="flex-shrink-0">
                <SelectDropdown
                  label=""
                  name="toCurrency"
                  options={(selectedMode === "Promo" ? promoCurrenciesRecieve : standardCurrenciesRecieve).map(
                    (currency) => ({
                      value: currency.code,
                      label: currency.code,
                      flag: currency.flag,
                    })
                  )}
                  control={control}
                  onValueChange={(code) => {
                    const newCurrency = (selectedMode === "Promo" ? promoCurrenciesRecieve : standardCurrenciesRecieve).find(
                      (c) => c.code === code
                    );
                    setTargetCurrency(newCurrency);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Exchange Rate and Fee Info - Modern Finance Stats */}
          <div className="flex flex-col">
            <div className="bg-[#ffffff05] rounded-xl px-4 border border-white/5 flex items-center justify-between">
              <p className="text-xs text-gray-500 mb-1">Exchange Rate</p>
              <p className="text-sm text-black">
                1 {selectedCurrency.code} = {(targetCurrency.rate / selectedCurrency.rate).toFixed(4)} {targetCurrency.code}
              </p>
            </div>
            <div className="bg-[#ffffff05] rounded-xl px-4 border border-white/5 flex items-center justify-between">
              <p className="text-xs text-gray-500 mb-1">Transfer Fee</p>
              <p className="text-sm text-black">$0.00</p>
            </div>
          </div>

          {/* Promo Info - Modern Alert Style */}
          {/* {selectedMode === 'Promo' && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
              <p className="text-xs text-gray-800 leading-relaxed">
                This rate is for new customers only. One per customer. Limited time offer. 
                Rates are subject to change. Promotional FX rate applies to first $500. 
                See <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Terms & Conditions</a> for details.
              </p>
            </div>
          )} */}

          {/* Submit Button - Modern Fintech Style */}
          <Button className="w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-xl text-base font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
            Transfer Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

