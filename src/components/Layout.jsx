const Layout = (props) => {
    return (
        <div className='w-full h-full'>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-[Indie Flower]'>
                    El aroma mágico
                </h1>
                <div>
                    <img src='./image 1.png' alt='banner' />
                </div>
                {props.children}
            </div>
            <div>
                Footer
            </div>
        </div>
    )
}

export default Layout


