import { skills } from '../../portfolio'
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../Home/Home.css"

export default function Skillset() {
  return (
    <div className="relative isolate overflow-hidden  py-32 sm:py-36 lg:py-72">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-3xl">
            <h2 className="text-3xl py-10 font-bold tracking-tight text-red-100 sm:text-4xl">Here’s my digital wizardry</h2>
            {skills.data[0].skills.map((skillSentence, index) =>{
                return (
                    <p key={index} className="text-left mt-4 text-lg leading-8 text-gray-300">
                        {skillSentence}
                    </p>
                )
            })

            }
          </div>
          <div className='max-auto max-w-2xl  '>
            <h2 className="text-3xl py-10 font-bold tracking-tight text-red-100 sm:text-4xl">Technologies</h2>
            <ul className='justify-center content-center'>
                {skills.data[0].softwareSkills.map((icon) => {
                    return (
                    <OverlayTrigger
                      key={icon.skillName}
                      placement={"top"}
                      overlay={
                        <Tooltip id={`tooltip-top`}>
                          <strong>{icon.skillName}</strong>
                        </Tooltip>
                      }
                    >
                      <li className="icons-inline pb-2" name={icon.skillName}>
                        {icon.svg}
                      </li>
                    </OverlayTrigger>
                    );
                })
                }
            </ul>
                
          </div>
          
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  )
}
