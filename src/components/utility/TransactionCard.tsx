import React from 'react'
import { formatDate } from '../DataTable'

interface TransactionDetails {
  amount: number;
  transaction_type: string;
  date: string;
  time: string;
  status: string;
}

const TransactionCard = ({ details }: { details: TransactionDetails }) => {
  
  return (
    <div className='border w-full h-[159px] border-[#bebebe] rounded-[4px]'>
      <div className='pl-[17px] w-full flex flex-col justify-between uppercase'>
        <div className='border-b h-[40px] text-[10px] w-full flex items-center px-[8px] justify-between '>
            <label htmlFor="amount" className=''>Amount:</label>
            <p>₦ {details?.amount}</p>
        </div>
        <div className='border-b h-[40px] text-[10px] w-full flex items-center px-[8px] justify-between '>
            <label htmlFor="amount" className=''>Transaction type:</label>
            <p>{details?.transaction_type}</p>
        </div>
        <div className='border-b h-[40px] text-[10px] w-full flex items-center px-[8px] justify-between '>
            <label htmlFor="amount" className=''>date:</label>
            <p>{`${formatDate(details?.date ? details?.date : "")} ${details?.time}`}</p>
        </div>
        <div className=' h-[40px] text-[10px] w-full flex items-center px-[8px] justify-between '>
            <label htmlFor="amount" className=''>status</label>
            <span
                  className={`inline-flex items-center justify-center gap-2 min-w-[64px] px-3 py-1 rounded-full border text-[8.45px] capitalize ${
                    details?.status === "processed"
                      ? "border-[#5DC090] bg-[#EFFDED] text-[#144909]"
                      : "border-[#F14156] bg-[#FEECEE] text-[#F14156]"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {details?.status}
                </span>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard
