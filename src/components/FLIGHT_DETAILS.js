import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';
import SignaturePad from 'react-signature-canvas'


const FLIGHT_DETAILS = () => {

    const [Date, setDate] = useState(``)
    const [FlightDetails, setFlightDetails] = useState(``)

    const [SecNoPF1, setSecNoPF1] = useState(``)
    const [SecNoPF2, setSecNoPF2] = useState(``)
    const [SecNoPF3, setSecNoPF3] = useState(``)
    const [SecNoPF4, setSecNoPF4] = useState(``)

    const [FromPF1, setFromPF1] = useState(``)
    const [FromPF2, setFromPF2] = useState(``)
    const [FromPF3, setFromPF3] = useState(``)
    const [FromPF4, setFromPF4] = useState(``)

    const [ToPF1, setToPF1] = useState(``)
    const [ToPF2, setToPF2] = useState(``)
    const [ToPF3, setToPF3] = useState(``)
    const [ToPF4, setToPF4] = useState(``)

    const [DPF1, setDPF1] = useState(``)
    const [DPF2, setDPF2] = useState(``)
    const [DPF3, setDPF3] = useState(``)
    const [DPF4, setDPF4] = useState(``)

    const [NPF1, setNPF1] = useState(``)
    const [NPF2, setNPF2] = useState(``)
    const [NPF3, setNPF3] = useState(``)
    const [NPF4, setNPF4] = useState(``)

    const [TPF1, setTPF1] = useState(``)
    const [TPF2, setTPF2] = useState(``)
    const [TPF3, setTPF3] = useState(``)
    const [TPF4, setTPF4] = useState(``)

    const [TypePF1, setTypePF1] = useState(``)
    const [TypePF2, setTypePF2] = useState(``)
    const [TypePF3, setTypePF3] = useState(``)
    const [TypePF4, setTypePF4] = useState(``)

    const [SecNoPM1, setSecNoPM1] = useState(``)
    const [SecNoPM2, setSecNoPM2] = useState(``)
    const [SecNoPM3, setSecNoPM3] = useState(``)
    const [SecNoPM4, setSecNoPM4] = useState(``)

    const [FromPM1, setFromPM1] = useState(``)
    const [FromPM2, setFromPM2] = useState(``)
    const [FromPM3, setFromPM3] = useState(``)
    const [FromPM4, setFromPM4] = useState(``)

    const [ToPM1, setToPM1] = useState(``)
    const [ToPM2, setToPM2] = useState(``)
    const [ToPM3, setToPM3] = useState(``)
    const [ToPM4, setToPM4] = useState(``)

    const [DPM1, setDPM1] = useState(``)
    const [DPM2, setDPM2] = useState(``)
    const [DPM3, setDPM3] = useState(``)
    const [DPM4, setDPM4] = useState(``)

    const [NPM1, setNPM1] = useState(``)
    const [NPM2, setNPM2] = useState(``)
    const [NPM3, setNPM3] = useState(``)
    const [NPM4, setNPM4] = useState(``)

    const [TPM1, setTPM1] = useState(``)
    const [TPM2, setTPM2] = useState(``)
    const [TPM3, setTPM3] = useState(``)
    const [TPM4, setTPM4] = useState(``)

    const [TypePM1, setTypePM1] = useState(``)
    const [TypePM2, setTypePM2] = useState(``)
    const [TypePM3, setTypePM3] = useState(``)
    const [TypePM4, setTypePM4] = useState(``)

    const [TotalTodayTime1, setTotalTodayTime1] = useState(``)
    const [TotalTodayTime2, setTotalTodayTime2] = useState(``)

    const [PreviousTime1, setPreviousTime1] = useState(``)
    const [PreviousTime2, setPreviousTime2] = useState(``)

    const [TotalAccTime1, setTotalACCTIME1] = useState(``)
    const [TotalAccTime2, setTotalACCTIME2] = useState(``)

    const [TotalTodaySectors1, setTotalTodaySectors1] = useState(``)
    const [TotalTodaySectors2, setTotalTodaySectors2] = useState(``)

    const [PreviousSectors1, setPreviousSectors1] = useState(``)
    const [PreviousSectors2, setPreviousSectors2] = useState(``)

    const [TotalAccSector1, setTotalACCSECTOR1] = useState(``)
    const [TotalAccSector2, setTotalACCSECTOR2] = useState(``)

    const [GrandTotalTime, setGrandTotalTime] = useState(``)
    const [GrandTotalSector, setGrandTotalSector] = useState(``)

    const [InstructorNotes, setInstructorNotes] = useState(``)

    const [Stage1, setStage1] = useState(false)
    const [Stage2, setStage2] = useState(false)
    const [Stage3, setStage3] = useState(false)
    const [Stage4, setStage4] = useState(false)
    const [Stage5, setStage5] = useState(false)

    const [CC, setCC] = useState(``)
    const [SA, setSA] = useState(``)
    const [LM, setLM] = useState(``)
    const [DM, setDM] = useState(``)
    const [A, setA] = useState(``)
    const [P, setP] = useState(``)
    const [M, setM] = useState(``)
    const [K, setK] = useState(``)



    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const Print = () => {
        handlePrint()
        console.log(componentRef.current)
    }

    let signPadTrainee = useRef({})
    const ClearTrainee = () => {
        signPadTrainee.current.clear()
    }
    let signPadIP = useRef({})
    const ClearIP = () => {
        signPadIP.current.clear()
    }

    let signPadTM = useRef({})
    const ClearTM = () => {
        signPadTM.current.clear()
    }


    return (
        <div className='container mx-auto mt-[110px]' >
            <button onClick={() => { Print() }} className='fixed top-[110px] right-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Print</button>
            {/* <button onClick={() => { ClearTrainee() }} className='fixed top-0 left-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear Signature 1</button>
            <button onClick={() => { ClearIP() }} className='fixed top-[7%] left-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear Signature 2</button>
            <button onClick={() => { ClearTM() }} className='fixed top-[14%] left-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear Signature 3</button> */}
            <div ref={componentRef} className='container mx-auto ' style={{ width: 21 + 'cm', height: 25.7 + 'cm' }}>
                <div className='flex justify-center mt-[20px]'>
                    <img alt='Air-Cairo-logo' className='w-[17%]' src='./air-cairo.jpg' />
                </div>
                <div class="watermark">
                    Sample For Demonstration Purposes Only
                </div>
                <table className=' text-[13px] text-start' >
                    <tbody>
                        <tr className='border-left-top-right-hidden'>
                            <td colSpan={4} className='border-0 w-[100%] text-start text-[13px] font-normal'>
                                <span>Date: <input type='text' className='pl-[7px] text-start w-[150px]' /> </span>
                            </td>
                            <td colSpan={8} className='border-0 w-[100%] text-[14px] text-center font-black'>
                                <span>FLIGHT DETAILS:<input type='text' className='pl-[7px] font-normal text-start w-[200px]' /></span>
                            </td>
                            <td colSpan={4} className='border-0 w-[100%] text-end  font-normal'>
                                <span className='underline text-[11px]'>FLTOPS/TRNG 03v3</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={7} className='text-center font-black text-[14px] w-[50%]'>
                                <span >P.F</span>
                            </td>
                            <td colSpan={7} className='text-center font-black text-[14px] w-[50%]'>
                                <span >P.M</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%]'>
                                <span >Sec No.</span>
                            </td>
                            <td colSpan={2} className='text-center font-medium text-[12px] w-[16%]'>
                                <span >Trip</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <span >Sector Time</span>
                            </td>
                            <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%] '>
                                <span >Type Of App.</span>
                            </td>
                            <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%] '>
                                <span >Sec No.</span>
                            </td>
                            <td colSpan={2} className='text-center font-medium text-[12px] w-[16%]'>
                                <span >Trip</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <span >Sector Time</span>
                            </td>
                            <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%]'>
                                <span >Type Of App.</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >From</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >To</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >D.</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >N.</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >T.</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >From</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >To</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >D.</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >N.</span>
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] '>
                                <span >T.</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3} colSpan={1} className='text-center font-medium  text-[13px] leading-tight w-[5%]'>
                                <p className='w-[37px] -rotate-90 h-[37px]'>TIME</p>
                            </td>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >TOTAL TODAY TIME</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodayTime1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodayTime2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                <span >GRAND TOTAL TIME</span>
                                <textarea rows={3} onChange={(e) => { setGrandTotalTime(e.target.value) }} className='text-center  pl-[5px] w-[100%] resize-none' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >PREVIOUS TIME</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousTime1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousTime2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]'>TOTAL ACC.TIME:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCTIME1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCTIME2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                        <tr>
                            <td rowSpan={3} colSpan={1} className='text-center font-medium  text-[13px] leading-tight w-[5%]'>
                                <p className='w-[37px] -rotate-90 h-[37px]'>SECTORS</p>
                            </td>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >TOTAL TODAY SECTORS</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodaySectors1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodaySectors2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                <span >GRAND TOTAL SECTOR</span>
                                <textarea onChange={(e) => { setGrandTotalSector(e.target.value) }} rows={3} className='text-center  pl-[5px] w-[100%] resize-none' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >PREVIOUS SECTORS:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousSectors1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousSectors2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]'>TOTAL ACC.SECTORS:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCSECTOR1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCSECTOR2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-start  w-[100%]'>
                    <span className='underline pl-[5px] font-black text-[14px]'>INSTRUCTOR NOTES</span>
                    <textarea onChange={(e) => { setInstructorNotes(e.target.value) }} rows={6} className='border-[4px] border-double border-black text-start pl-[5px] w-[100%] resize-none' />
                </div>
                <div style={{ marginTop: -10 + 'px' }} className='text-center'>
                    <span className='font-normal text-[13px]'>Stage 1 (4 sectors PM), Stage 2 (40 hrs), Stage 3 (40 hrs), Stage 4 (20 hrs)</span>
                </div>
                <div className='container mx-auto' style={{ width: 21 + 'cm' }}>
                    <table className=' text-[13px] text-start'  >
                        <tbody>
                            <tr>
                                <td colSpan={1} className='text-start align-top bg-slate-200 font-black text-[14px] w-[40%]'>
                                    <span >EVALUATION</span>
                                </td>
                                <td colSpan={3} className='text-center font-black text-[14px] w-[60%]'>
                                    <div>
                                        <label className='ml-[2%] mr-[5px]' htmlFor='Stage1-checkBox'>S1 (US)</label>
                                        <input checked={Stage1} onChange={(e) => { setStage1(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage1-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage2-checkBox'>S2</label>
                                        <input checked={Stage2} onChange={(e) => { setStage2(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage2-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage3-checkBox'>S3</label>
                                        <input checked={Stage3} onChange={(e) => { setStage3(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage3-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage4-checkBox'>S4</label>
                                        <input checked={Stage4} onChange={(e) => { setStage4(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage4-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage5-checkBox'>S5</label>
                                        <input checked={Stage5} onChange={(e) => { setStage5(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage5-checkBox' type='checkbox' className=' text-black items-center' />
                                    </div>
                                    <div className='text-center font-normal text-[11px]'>
                                        <span >S1 (Unsatisfactory) S2 (Below average) S3 (Average) S4 (Good) S5 (Very Good)</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-black text-[14px] w-[40%]'>
                                    <span className='pl-[5px]'>CRM - Non Technical Skills</span>
                                </td>
                                <td colSpan={3} className=' bg-slate-200 w-[60%]'>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                    <span className='pl-[5px]' >(CC) - Cooperation</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setCC(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]' >(SA) Situation Awareness</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setSA(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                    <span className='pl-[5px]' >(LM) - Leadership & managerial skills</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setLM(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]' >(DM) Decision Making</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[50%]' >
                                    <input onChange={(e) => { setDM(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start bg-slate-200 font-black text-[14px] w-[40%]'>
                                    <span className='pl-[5px]' > Technical Skills</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[13px] w-[40%]'>
                                    <span className='pl-[2px]'>(A) Flight path management-Automation</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setA(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]'>(P) Procedure Adherence & Execution</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setP(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                    <span className='pl-[5px]'>(M) Flight path management - Manual</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setM(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]'>(K) Knowledge</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setK(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex flex-row justify-between text-center font-bold text-[12px]'>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>Trainee</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                <SignaturePad ref={signPadTrainee} />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>IO/CA/EP</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                <SignaturePad ref={signPadIP} />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>Training Manager</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                <SignaturePad ref={signPadTM} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: 21 + 'cm' }} className='container mx-auto flex flex-row justify-between text-center font-bold text-[12px]'>
                <button onClick={() => { ClearTrainee() }} className=' ml-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
                <button onClick={() => { ClearIP() }} className=' bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
                <button onClick={() => { ClearTM() }} className='mr-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
            </div>
        </div>
    )
}

export default FLIGHT_DETAILS
