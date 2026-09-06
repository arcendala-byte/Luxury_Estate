'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, DollarSign, Percent, Calendar, TrendingUp } from 'lucide-react'

export function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(1000000)
  const [downPayment, setDownPayment] = useState(200000)
  const [interestRate, setInterestRate] = useState(6.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [calculated, setCalculated] = useState(false)

  const calculateMortgage = () => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    if (loanAmount <= 0) {
      setMonthlyPayment(0)
      setTotalPayment(0)
      setTotalInterest(0)
      setCalculated(true)
      return
    }

    const payment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const total = payment * numberOfPayments
    const interest = total - loanAmount

    setMonthlyPayment(payment)
    setTotalPayment(total)
    setTotalInterest(interest)
    setCalculated(true)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-[#C9A227]" />
        </div>
        <h3 className="text-xl font-serif text-charcoal font-light">Mortgage Calculator</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Home Price</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Down Payment</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              />
            </div>
            <div className="mt-1 text-xs text-gray-400">
              {downPayment > 0 && `${Math.round((downPayment / homePrice) * 100)}% down payment`}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Interest Rate (%)</label>
            <div className="relative">
              <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-charcoal focus:border-[#C9A227]/50 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Loan Term (Years)</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-charcoal appearance-none focus:border-[#C9A227]/50 outline-none transition-colors"
              >
                <option value={10}>10 years</option>
                <option value={15}>15 years</option>
                <option value={20}>20 years</option>
                <option value={25}>25 years</option>
                <option value={30}>30 years</option>
              </select>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={calculateMortgage}
            className="w-full bg-[#C9A227] text-white px-6 py-3 rounded-xl font-sans font-medium hover:bg-[#C9A227]/90 transition-colors"
          >
            Calculate
          </motion.button>
        </div>

        <div className="bg-gray-50/50 rounded-xl p-6 flex flex-col justify-center">
          {calculated ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <p className="text-sm text-gray-400 font-light">Monthly Payment</p>
                <p className="text-3xl font-serif text-[#C9A227] font-bold">
                  {formatCurrency(monthlyPayment)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-gray-400 font-light">Total Payment</p>
                  <p className="text-sm font-semibold text-charcoal">{formatCurrency(totalPayment)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-light">Total Interest</p>
                  <p className="text-sm font-semibold text-charcoal">{formatCurrency(totalInterest)}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 font-light">Loan Amount</span>
                  <span className="font-medium text-charcoal">{formatCurrency(homePrice - downPayment)}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-500 font-light">Down Payment</span>
                  <span className="font-medium text-charcoal">{formatCurrency(downPayment)}</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-400">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-light">Enter your details and click calculate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
