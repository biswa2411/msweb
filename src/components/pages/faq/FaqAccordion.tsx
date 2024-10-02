'use client'
import { Add, PlusOne } from "@mui/icons-material";
import React, {  useState } from "react";


const FaqAccordion = () => {


    const [active, setActive] = useState<any>(0);

    const toggleAccordion = (index: number) => {
        setActive((prev: any) => prev === index ? null : index);
    };
    const faqs = [
        {
            "question": "How much does a digital painting cost?",
            "answer": "Depends on the Size and No of Persons"
        },
        {
            "question": "Can I customize the size of my digital painting frame?",
            "answer": "Yes, You can"
        },
        {
            "question": "How many days will it take to deliver?",
            "answer": "Depends on the Pincode but Typically 10 to 12 days"
        },
        {
            "question": "What sizes are available for the digital painting frames?",
            "answer": "Any sizes as per requirement"
        },
        {
            "question": "What payment methods do you accept?",
            "answer": "UPI, Credit Card, Debit Card, EMI and COD"
        },
        {
            "question": "What is the resolution/quality of the digital paintings?",
            "answer": "We have 1080p, 2K and also as per your requirement"
        }
    ]




    return (
        <div className="flex flex-col w-full gap-2 p-2">
            {faqs.map((faq, index) => (
                <button
                    key={index}
                    className={`flex flex-col w-full p-2 rounded-lg shadow-custom`}
                    onClick={() => toggleAccordion(index)}
                >

                    <div className="flex justify-between w-full font-bold text-primary">
                        <h4 className="question-style">
                            {faq.question}
                        </h4>
                        <Add
                            className={ ` duration-500 ease-in-out transition-transform ${active == index ? `rotate-45` : `rotate-0`}`}
                        />
                    </div>
                    <div

                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${active == index ? 'max-h-96' : 'max-h-0'}`}

                    >
                        <p>{faq.answer}</p>
                    </div>

                </button>))}
        </div>





    );
};

export default FaqAccordion;
