import { Navbar } from "../../components/Navbar";
import { FaReact } from 'react-icons/fa'
import { MySkills } from "../../data";
const skillType = MySkills.map(item => item.name)
import Cards from "../../components/Card";
import SkillLayout from '../../components/SkillsLayout'

export default function MySkill() {


    return (
        <div>
            <Navbar />
            <div className="flex items-center">

                <SkillLayout menactive=''>
                    <div className="w-1/2 flex flex-col items-center m-auto">
                        <label className="font-bold text-4xl my-4">
                            My Skills
                        </label>

                        <div className="w-32 h-32 my-4 bg-gray-100 rounded-full">

                        </div>

                        <div className="px-4 text-center my-4">
                            3 Years of working experience in Rich Responsive UI Development with
                            HTML5, Javascript, CSS, BootStrap 4 and React JS
                            • Working experience on React JS
                            • Experience on API management, JSON and Node Js
                            • Extensively used Azure DevOps for Project management and Code
                            Repository

                        </div>
                        <div className="w-60 my-8 h-2 bg-black"></div>
                    </div> 

                </SkillLayout>

            </div>
        </div>
    )
}
