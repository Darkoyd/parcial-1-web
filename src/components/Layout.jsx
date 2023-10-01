const Layout = (props) => {
    return (
        <div className='w-screen h-screen flex flex-col content-center'>
            <div className='flex flex-col pt-6 pl-12 content-center self-center'>
                <h1 className="text-2xl self-start pl-40 pb-8">
                    El aroma mágico
                </h1>
                <hr className="mx-10"></hr>
                <div className="self-center pt-2">
                    <img src='./image 1.png' alt='banner' />
                </div>
                {props.children}
            </div>
            <div className="flex bottom-0 absolute left-1/3">
                Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
            </div>
        </div>
    )
}

export default Layout


