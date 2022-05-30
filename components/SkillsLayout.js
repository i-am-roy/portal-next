import { MySkills } from "../data"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
const skillType = MySkills.map(item => item.name)
export default function Layout({children }) {
    const router = useRouter()
    const {skillname} = router.query
    return (
        <>
            <div className="flex items-center w-full">


                <div className="flex flex-col items-center justify-center side-menu w-1/3 h-[calc(100vh_-_2.5rem)] bg-gray-50">


                    <ul className="text-lg font-medium w-1/2 ">

                        {
                            skillType.map((item, id) => {
                                return (
                                   <Link key={id} href={`/myskills/${item.toString().trim()}`}> 
                                   <li className={`transition-all duration-600 ease-in-out m-2 hover:text-2xl hover:font-extrabold hover:py-2 hover:cursor-pointer ${item==skillname ? 'font-extrabold py-2' : ''}`} key={id}>
                                        {item}
                                    </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
               {children}

            </div>
        </>
    )
}