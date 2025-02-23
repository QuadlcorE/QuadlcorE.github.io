import React from 'react'
import styles from './css/footer.module.css'
import { DataStrings } from '@/utils/constants'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='text-neutral-content items-center p-4 w-full'>
      <div className="flex items-center justify-center max-w-screen-lg w-full mx-auto md:px-28">
      <div className="flex-1">
                <hr />
            </div>
            <div className="mx-2">
                {/* Add your content here */}
                {/* Your content in the middle */}
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                {DataStrings.socials.map((social) => {
                    return (
                        <a className="inline-block mx-2" key={social.socialname} href={social.sociallink} target="_blank">
                            {social.svg}
                        </a>
                    )
                })}
            </nav>
            </div>
            <div className="flex-1">
                <hr />
            </div>
      </div>

      </div>
    </footer>
  )
}