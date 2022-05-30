import { Navbar } from "../../components/Navbar"
import SkillLayout from '../../components/SkillsLayout'

import { useRouter } from "next/router"
import { MySkills } from "../../data"
import Cards from "../../components/Card"
export default function SkillDetails() {
    const router = useRouter()
    const { skillname } = router.query
    let itemList = MySkills.filter(item => {
        if (item.name == skillname) {
            return item.options
        }
    })[0]
    itemList = itemList ?  itemList[0] : []
    return (
        <>
            <Navbar />
            <div className="flex items-center">

                <SkillLayout menuactive={skillname}>
                    <div className="px-8 w-full h-1/2 align-middle grid grid-cols-3 gap-3">
                    {
                            itemList.map((e,id) => {
                                return <Cards key={id} {...e} />
                            })
                        }
                    </div>
                </SkillLayout>

            </div>
        </>
    )
}