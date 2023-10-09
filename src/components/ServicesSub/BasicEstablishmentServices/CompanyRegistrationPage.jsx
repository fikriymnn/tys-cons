import React from 'react'
import CompanyRegistration from '../../CompanyRegistrationCard'
import CompanyRegistrationCard from '../../CompanyRegistrationCard'
function CompanyRegistrationPage({ title, img, price, id, key }) {


    const Card1 = (

        <CompanyRegistrationCard src={img}
            title={title}
            price={
                price
            } />
    );
    const Card2 = (

        <CompanyRegistrationCard src={"/foto.jpg"}
            title={"dakjnlk Basic Regulation"}
            price={
                "2000-2000"
            } />
    );
    const Card3 = (

        <CompanyRegistrationCard src={"/foto.jpg"}
            title={"Company Registration Basic Regulation Company Registration Basic RegulationCompany Registration Basic RegulationCompany Registration Basic Regulation"}
            price={
                "2000-2000"
            } />
    );
    const Card4 = (

        <CompanyRegistrationCard src={"/foto.jpg"}
            title={"Company Registration Basic Regulation"}
            price={
                "2000-2000"
            } />

    );

    const CompanyReg = [
        Card1, Card2, Card3, Card4
    ]
    return (
        <>
            <a key={key} href="/services/detail">


                <div className='bg-white shadow-xl hover:translate-y-[-10px] duration-300 md:block sm:block grid grid-cols-2 md:h-72'>
                    <div className=' bg-blue-700'>
                        <img src={img} alt="" />
                    </div>
                    <div className='p-3 md:w-full sm:w-full w-11/12 md:h-20'>
                        <h1 className='font-semibold text-gray-900  md:text-base sm:text-base text-sm mb-2 line-clamp-2 '>{title}</h1>
                        <h2 className='md:text-base sm:text-sm text-sm text-blue-600'>{price}</h2>
                    </div>




                </div>
            </a>
        </>
    )
}

export default CompanyRegistrationPage