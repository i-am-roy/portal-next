import Link from 'next/link'
const navbaroptions = [
    {
        title : 'My Project',
        link : '/myproject'
    },
    {
        title : 'My Skills',
        link : '/myskills'
    },
    {
        title : 'My Career',
        link : '/mycareer'
    },
    {
        title : 'About Me',
        link : '/aboutme'
    }
]

export const Navbar = () => {
    
    
    return(
        <div className='bg-black flex justify-between w-screen relative h-10 shadow-lg'>
            <Link href='/'>
                <label className="brandlogo">
                    <img src="/pic1.jpeg" className="cursor-pointer w-14 h-14 absolute rounded-full ml-4 mt-2"/>
                </label>
            </Link>
            <ul className='flex flex-row items-center'>
                {
                    navbaroptions.map((item,index) => {
                        return (
                            <Link key={index} href={item.link}><li className='text-white px-4'>{item.title}</li></Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}