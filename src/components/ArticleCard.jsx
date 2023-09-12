import React from 'react'

function ArticleCard() {
    return (
        <a href="/articles/article">
            <div className='bg-white shadow-xl hover:translate-y-[-10px]'>
                <div className='h-36 bg-blue-700'>

                </div>
                <div className='p-3 '>
                    <h1 className='font-semibold text-gray-900  '>Lorem Ipsum is simply dummy text of the printing and</h1>
                    <h2>1 December 2022</h2>
                </div>

            </div>
        </a>
    )
}

export default ArticleCard
