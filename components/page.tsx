function Content({ children }) {
    return (
        <div className='relative py-5 px-5 md:px-10 mt-20 w-full flex flex-col space-y-8'>
            {children}
        </div>
    )
}

function Page({ children, id }) {
    return (
        <section id={id} className='w-screen flex'>
            {children}
        </section>
    )
}

function PageFull({ children, id }) {
    return (
        <section id={id} className='w-screen h-screen flex items-center '>
            {children}
        </section>
    )
}

export { Page, PageFull, Content };