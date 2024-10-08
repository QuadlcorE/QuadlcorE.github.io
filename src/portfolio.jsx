import Projects from "./components/Home/projects";
import TetrisClone from "./assets/TetrisClone.jpeg"
import Gamepwanet from "./assets/Gamepwanet.jpeg"

const skills = {
    data: [
      {
        skills: [
            "⚡ Develop interactive User Interfaces for your web applications",
            "⚡ Developing mobile applications using Flutter ",
            "⚡ Creating application backend in Flask & Django",
            "⚡ Integration of third party services such as Firebase",
        ],
        softwareSkills: [ 
          {
            skillName: "HTML5",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                    <path fill="#e44d26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z" />
                    <path fill="#f16529" d="m64 116.8l36.378-10.086l8.559-95.878H64z" />
                    <path fill="#ebebeb" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z" />
                    <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z" />
                  </svg>
                  ),
          },

          {
            skillName: "CSS3",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128"
                  >
              <path fill="#1572b6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z" />
              <path fill="#33a9dc" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z" />
              <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z" />
              <path fill="#ebebeb" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z" />
              <path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z" />
              <path fill="#ebebeb" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z" />
            </svg>
            ),
          },

          {
            skillName: "JavaScript",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
              <path fill="#f0db4f" d="M1.408 1.408h125.184v125.185H1.408z" />
              <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237" />
            </svg>
            ),
          },

          // {
          //   skillName: "PHP",
          //   fontAwesomeClassname: "simple-icons:php",
          //   style: {
          //     color: "#7377AD",
          //   },
          // },

          // {
          //   skillName: "ReactJS",
          //   fontAwesomeClassname: "simple-icons:react",
          //   style: {
          //     color: "#61DAFB",
          //   },
          // },
          
          {
            skillName: "NodeJS",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128"
                  >
                  <path fill="url(#deviconNodejs0)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z" />
                  <path fill="url(#deviconNodejs1)" d="M116.897 29.76L66.841.825A8 8 0 0 0 65.302.23L9.21 96.798a6.3 6.3 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.7 3.7 0 0 0-1.302-1.072" />
                  <path fill="url(#deviconNodejs2)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z" />
                  <defs>
                    <linearGradient id="deviconNodejs0" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#3f873f" />
                      <stop offset=".33" stop-color="#3f8b3d" />
                      <stop offset=".637" stop-color="#3e9638" />
                      <stop offset=".934" stop-color="#3da92e" />
                      <stop offset="1" stop-color="#3dae2b" />
                    </linearGradient>
                    <linearGradient id="deviconNodejs1" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse">
                      <stop offset=".138" stop-color="#3f873f" />
                      <stop offset=".402" stop-color="#52a044" />
                      <stop offset=".713" stop-color="#64b749" />
                      <stop offset=".908" stop-color="#6abf4b" />
                    </linearGradient>
                    <linearGradient id="deviconNodejs2" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715)scale(6.18523)" gradientUnits="userSpaceOnUse">
                      <stop offset=".092" stop-color="#6abf4b" />
                      <stop offset=".287" stop-color="#64b749" />
                      <stop offset=".598" stop-color="#52a044" />
                      <stop offset=".862" stop-color="#3f873f" />
                    </linearGradient>
                  </defs>
                </svg>
            ),
          },

          {
            skillName: "NPM",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#cb3837" d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z" />
                <path fill="#fff" d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z" />
              </svg>
            ),
          },

          // {
          //   skillName: "MongoDB",
          //   fontAwesomeClassname: "simple-icons:mongodb",
          //   style: {
          //     color: "#439743",
          //   },
          // },
          // {
          //   skillName: "GraphQL",
          //   fontAwesomeClassname: "simple-icons:graphql",
          //   style: {
          //     color: "#DE33A6",
          //   },
          // },
          // {
          //   skillName: "Android",
          //   fontAwesomeClassname: "simple-icons:android",
          //   style: {
          //     color: "#3DDC84",
          //   },
          // },
          // {
          //   skillName: "Java",
          //   fontAwesomeClassname: "simple-icons:java",
          //   style: {
          //     color: "#f89820",
          //   },
          // },

          {
            skillName: "Flutter",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#3fb6d3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zm64 63.8h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z" />
                <path fill="#27aacd" d="m81.6 93.9l-20-20l-19.4 19.6l19.4 19.6z" />
                <path fill="#19599a" d="M115.7 128L81.6 93.9l-20 19.2L76.3 128z" />
                <linearGradient id="deviconFlutter0" x1="59.365" x2="86.825" y1="116.36" y2="99.399" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#1b4e94" />
                  <stop offset=".63" stop-color="#1a5497" />
                  <stop offset="1" stop-color="#195a9b" />
                </linearGradient>
                <path fill="url(#deviconFlutter0)" d="m61.6 113.1l30.8-8.4l-10.8-10.8z" />
              </svg>

            ),
          },

          {
            skillName: "Dart",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#00c4b3" d="m35.2 34.9l-8.3-8.3v59.7l.1 2.8c0 1.3.2 2.8.7 4.3l65.6 23.1l16.3-7.2z" />
                <path fill="#22d3c5" d="m109.6 109.3l-16.3 7.2l-65.4-23.1c1.3 4.8 4 10.1 7 13.2l21.3 21.2l47.6.1z" />
                <path fill="#0075c9" d="M1.7 65.1C-.4 67.3.7 72 4 75.5l14.7 14.8l9.2 3.3c-.3-1.5-.7-3-.7-4.3l-.1-2.8l-.2-59.8m82.7 82.6l7.2-16.4l-23-65.6c-1.5-.3-3-.6-4.3-.7l-2.9-.1l-59.6.1" />
                <path fill="#00a8e1" d="M93.6 27.3q.3 0 0 0q.3 0 0 0m16 82l17.7-5.8V54.8l-20.4-20.5c-3-3-8.3-5.8-13.2-7l23.1 65.6" />
                <path fill="#00c4b3" d="M90.5 18.2L75.7 3.5c-3.4-3.4-8-4.4-10.4-2.3L26.9 26.6h59.5l2.9.1c1.3 0 2.8.2 4.3.7z" />
              </svg>
            ),
          },

          // {
          //   skillName: "Visual Basic",
          //   fontAwesomeClassname: "simple-icons:dot-net",
          //   style: {
          //     color: "#029FCE",
          //   },
          // },
          // {
          //   skillName: "MySQL",
          //   fontAwesomeClassname: "simple-icons:mysql",
          //   style: {
          //     color: "#4479A1",
          //   },
          // },
          // {
          //   skillName: "jQuery",
          //   fontAwesomeClassname: "simple-icons:jquery",
          //   style: {
          //     color: "#0865A6",
          //   },
          // },
          // {
          //   skillName: "Wordpress",
          //   fontAwesomeClassname: "simple-icons:wordpress",
          //   style: {
          //     color: "#207297",
          //   },
          // },
          // {
          //   skillName: "Apache",
          //   fontAwesomeClassname: "simple-icons:apache",
          //   style: {
          //     color: "#CA1A22",
          //   },
          // },
          
          {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#f34f29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501" />
              </svg>
            ),
          },

          {
            skillName: "Github",
            fontAwesomeClassname: "simple-icons:github",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <g fill="white">
                  <path fill-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clip-rule="evenodd" />
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237m4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0" />
                </g>
              </svg>
            ),
          },

          {
            skillName: "C",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#659ad3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7" />
                <path fill="#03599c" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z" />
                <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8z" />
              </svg>
            ),
          },

          {
            skillName: "C++",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em"
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
              <path fill="#00599c" d="M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0" />
              <path fill="#004482" d="m68.36 126.586l46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0" />
              <path fill="#659ad2" d="M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0" />
              <path fill="#fff" d="M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465c-10.433 0-18.922-8.488-18.922-18.922s8.49-18.922 18.922-18.922c6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57z" />
            </svg>
            ),
          },

          {
            skillName: "C#",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <path fill="#9b4f96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7s-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7" />
                <path fill="#68217a" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7s2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8z" />
                <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20c-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8z" />
              </svg>
            ),
          },

          {
            skillName: "Python",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
                <linearGradient id="deviconPython0" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#5a9fd4" />
                  <stop offset="1" stop-color="#306998" />
                </linearGradient>
                <linearGradient id="deviconPython1" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#ffd43b" />
                  <stop offset="1" stop-color="#ffe873" />
                </linearGradient>
                <path fill="url(#deviconPython0)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007c-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521c-2.268 9.405-2.368 15.275 0 25.096c1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837c-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721c0 2.593-2.083 4.69-4.634 4.69c-2.56 0-4.633-2.097-4.633-4.69c-.001-2.604 2.073-4.721 4.633-4.721" transform="translate(0 10.26)" />
                <path fill="url(#deviconPython1)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547c7.816 2.297 15.312 2.713 24.665 0c6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519c2.578-7.735 2.467-15.174 0-25.096c-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692c0 2.602-2.074 4.719-4.634 4.719c-2.55 0-4.633-2.117-4.633-4.719c0-2.595 2.083-4.692 4.633-4.692" transform="translate(0 10.26)" />
                <radialGradient id="deviconPython2" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#b8b8b8" stop-opacity="0.498" />
                  <stop offset="1" stop-color="#7f7f7f" stop-opacity="0" />
                </radialGradient>
                <path fill="url(#deviconPython2)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416c-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417" opacity="0.444" />
              </svg>

            )
          },

          {
            skillName: "Flask",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
            <path fill="white" d="M44.44 100.63c-4.23-3.33-8.74-6.52-11.83-11.01c-6.49-7.92-11.49-17.1-14.9-26.74c-2.07-6.27-2.77-12.99-5.44-19.02c-2.78-4.38.48-9.16 5.27-10.55c2.13-.41 5.89-2.43 1.36-.98c-4.06 2.98-4.45-2.71-.29-3.07c2.84-.38 3.89-2.7 2.92-4.8c-3.05-1.99 7.4-4.18 2.14-7.15c-5.48-5.91 7.66-7.05 4.42-.33c-.77 5.16 9.18-.95 6.87 5.01c2.35 2.86 8.8.65 8.63 4.67c3.42.24 4.6 3.11 7.8 3.33c3.33 1.5 9.36 2.69 10.49 6.44c-3.3 2.61-10.95-5.4-11.31 1.84c1 10.69.74 21.7 4.65 31.88c1.85 6.16 6.33 11.01 10.38 15.81c3.88 4.7 9.12 8.01 14.48 10.8c4.69 2.21 9.75 3.68 14.87 4.6c2.07-1.59 5.74-7.48 8.97-5c.16 2.8-6.42 5.84-.31 5.54c3.59-1.08 6.08 2.77 9.04-.71c2.72 3.23 11.32-2.06 9.38 4.53c-2.62 1.69-6.44.67-9.07 3c-4.33-2.16-7.77 1.93-12.56 1.42c-5.32.95-10.73 1.34-16.13 1.34c-8.85-.7-17.89-.99-26.3-4.07c-4.74-1.38-9.37-4.08-13.53-6.78m7.47 3.24c4.63 2 9.16 4.11 14.23 4.75c8.05 1.12 16.37 2.84 24.45 1.27c-3.66-1.65-7.44.64-11.08-1.18c-4.37.94-9.06-.24-13.5-.82c-5.05-2.25-10.5-3.8-15.23-6.72c-5.91-2.16 3.06 2.77 4.65 3.17c3.69 2.1-4.06-1.08-5.16-1.95c-3.09-1.74-3.49-1.37-.31.39c.64.37 1.28.77 1.95 1.09m-8.81-6.23c4.49 1.66-.02-3.16-2.07-2.88c-.91-1.58-3.48-2.58-1.67-3.43c-3.26 1.13-3.42-4.3-4.95-3.53c-3.45-1.09-1.34-4.95-5.45-7.32c-.37-2.5-4.08-4.66-5.26-8.43c-.52-1.93-4.19-7.46-1.94-2.31c1.92 4.96 5.29 9.21 8.1 13.45c2.18 4.04 4.76 8.26 8.72 10.78c1.34 1.3 2.63 3.27 4.52 3.67M30.17 83.45c.16-.68.82 1.46 0 0m18.3 16.18c1-.44-1.43-.56 0 0m2.44.89c-.25-1.23-1.11.69 0 0m3.05 1.27c1.45-1.38-2.24-.87 0 0m5.22 2.91c.89-1.3-2.82-.49 0 0m-10.03-6.99c2.25-1.46-2.91-.02 0 0m2.29 1.14c-.07-.77-.82.34 0 0m11.43 7.13c1.84 1.16 10.73 2.54 5.16.48c-.93.2-10.33-2.66-5.16-.48M44.72 91.85c-.18-.77-2.85-.85 0 0m5.32 3.1c1.39-.96-2.87-.74 0 0m4.48 2.75c1.98-.75-3.23-.75 0 0m-11.97-8.21c2.16 1.65 8.7.21 3.3-.99c-2.45-1.31-7.99-2.2-4.22.79zm15 9.16c.9-1.53-3.77-.88 0 0m-4.56-3.63c5.27 1.49-4.43-3.34-1.3-.55l.7.32zm9.14 5.28c4.99.05-4.51-.68 0 0m-21.5-13.7c-.19-.93-1.23.08 0 0m29.94 18.44c.14-1.68-1.62 1.25 0 0M49.15 91.82c-.3-.88-1.56-.04 0 0m-8.04-5.8c2.86-.17-3.93-1.26 0 0m-9.54-6.16c-.36-1.38-3.12-2.47 0 0M56.6 95.74c-.52-.6-.25.13 0 0m15.58 9.56c-.05-.91-.85.35 0 0M55.22 94.32c.28-1.18-2.44-.36 0 0m-11.6-7.36c2.13-.23-3.42-1.44 0 0m19.63 12.2c3.32-1.32-3.24-.64 0 0m-10.21-6.93c3.83.49-4.56-2.61-.84-.28zm13.31 8.19c3.58-2.14 2.4 5.01 6.07.6c3.62-2.64-3.13 3.27 1.33.47c3.23-2.16 7.99 1.02 11 2.06c2.16-.11 4.27 1.87 6.49.67c4.27-1.15-8.36-1.71-5.05-3.75c-3.91 1.14-6.8-1.36-8.72-3.86c-4.39-1.01-9.46-3.25-11.65-7.14c-.89-1.46 1.29.21-.77-2.18c-2.64-2.35-3.96-5.02-5.73-7.88c-2.12-1.13-2.37-4.46-2.58-.11c.02-2.74-2.56-4.59-3.19-3.82c-.01-2.64 2.76-1.32.82-3.27c-.42-2.74-1.79-5.59-2.2-8.68c-.64-1.49-.09-4.68-2.19-1.31c-.76 3.57-.25-4.38.94-1.76c1.56-2.67-.56-2.36-.65-1.99c1.02-2.26.64-5.46-.27-4.24c.54-2.39.86-8.8-.81-7.66c1.01-2.5 1.92-11.44-2.47-8.03c-1.78.03-4.85.64-6.31 1.37c4.56 2.51-.46.91-2.32.51c-.24 2.33-2.08 1.32-4.38 1.34c3.67.45-1.79 3.75-3.89 2.47c-2.74 1.31 2.36 4.57.05 5.58c.28 1.52-4.19-.55-3.84 2.96c-2.65-1.12-.36 4.16.96 2.38c4.51 1.22 3.18 4.01 3.29 6.65c-.74 1.54-3.63-3.62-.64-3.38c-2.36-3.83-2.61-1.38-4.56.39c-.45.13 4.99 2.53 1.57 3.72c3.01.47 3.1 3.1 3.71 4.76c1.81 1.88 1.44-2.08 3.6.18c-1.37-2.02-7.25-5.68-2.52-4.51c-.03-2.03-.86-3.67.6-3.63c1.44-2.6-1.51 6.42 1.73 3.11c.9-.39 1.12-2.6 2.73.21c2.34 2.3.85 3.97-2.46 1.86c.59 2.01 4.42 2.72 3.7 5.86c.76 2.76 1.83 1.74 2.76 1.58c.73 2.68 1.14.71 1.18-.57c3.34.72 2.56 2.69 3.6 4.07c2.3 1.04-3.29-7.04.66-2.43c4.16 3.75 1.56 5.32-2.17 4.72c2.36-.19 3.12 3.19 6.07 3.07c2.69 1.28 4.52 6.2-.12 4.15c-1.61-1.45-7.31-3.24-2.65-.48c4.3 1.99 7.71 3.18 11.86 5.68c2.96 2.12 4.25 4.54 5.37 5.02c-2.49 1.19-7.51-.95-3.78-1.61c-2.33-.42-4.94-1.6-2.71 1.3c1.89 1.58 6.71 1.42 7.58 1.59c-.73 1.61-1.99 1.74.03 1.86c-2.25 1.22.72 1.41.93 2.1m-4.6-13c-1.37-1.43-1.72-4.11-.24-1.78c.75.3 2.43 4.38.24 1.78m14.99 9.52c.85-.06.02.65 0 0M59.59 83.91c-.06-2.17.49 1.67 0 0M58.1 81.9c-1.73-3.32 2.17.95 0 0M40.04 69.44c1.01-.27.5 1.73 0 0m14.37 7.79c.62-2.33.73 1.96 0 0m-10.15-7.06c-.71-1.29 1.5 1.21 0 0m8.71 2.79c-1.63-3.65 1.16-2 .36.6zM37.95 62.95c-.73-1.2-1.93-4.72-1.55-5.79c.35 1.75 3.72 7.53 1.65 2.39c-2.28-4.3 2.73 1.4 3.25 2.47c.24 1.07-1.41-.29-.29 2.21c-2.04-2.85-1.2 1.58-3.06-1.28m-4.64-3.2c.19-2.79 1.06 1.91 0 0m2.08.72c1-2.11 1.69 2.93 0 0m-5.02-3.89c-1.73-1.72-2.98-3.3.08-1.07c1.18.05-2.62-3.6.28-1.16c3.06.56 1.51 5.01-.36 2.23m2.64-.07c1-.99.53.98 0 0m1.62.52c-1.52-2.85 1.85 1.2 0 0m-3.22-3.08c-5.02-4.47 6.31 2.34.82.83zm14.39 8.36c-2.18-1.3-.58-9.18.16-3.79c2.11-.68-.12 2.78 1.46 2.75c-.24 2.18-.95 2.97-1.62 1.04m5.33 3.15c.21-2.38.45 1.62 0 0m-.93-.92c.24-1.01.03 1.2 0 0M32.39 52.48c-3.23-4.45 9.38 4.51 2.07 1.13c-.77-.21-1.69-.28-2.07-1.13m10.26 5.43c-.31-3.75.68.62 0 0m7.78 5c.6-2.14.05 1.41 0 0M32.89 50.78c1.92-.41 7.95 3.37 2.41 1.08c-.62-.69-1.93-.38-2.41-1.08m16.47 8.21c.2-3.84 1.15-2.29.01.55zm-15.05-9.55c.78-1.15-2.08-5.18.41-1.45c1.08.85 3.11 1.43 1.31 1.79c2.84 2.5-.68.68-1.72-.34m14.24 8.35c.54-4.37.47 2.56 0 0M32.68 45.41c.6-.26.32.79 0 0m3.71 2.21c.96-2.01 1.77 2.23 0 0m10.47 5.82c0-.77.2 1.12 0 0m-.6-1.34c-1.45-3.59 1.35 1.9 0 0m-.89-2.35c-.25-1.48.83 1.86 0 0m1.45-2.36c-1-1.76 1.26-7.75 1.51-4.03c-1.05 2.89-.3 4.51.43.63c1.36-3.06-.29 6.02-1.94 3.4m1.49-8.91c.44-.53.1.65 0 0M45.82 87.6c-.59-.52.07.33 0 0m5.13 2.6c2.86.74 2.84-.44.26-.79c-1.39-1.29-5.77-2.66-1.85-.16c.27.65 1.09.63 1.59.95m-10.14-6.74c1.57 1.18 5.93 3.32 2.24.45c1.24-1.44-2.38-2.21-1.18-3.18c-3.06-1.87-2.41-1.7-.27-1.64c-3.67-1.64.53-1.52.33-2.36c-1.42-.28-7.03-2.5-3.73.18c-3.36-1.71-.8.64-1.82.39c-3.44-.94 3.06 2.62-.54 1.73c1.97 1.56 5.3 4 .83 1.65c-.57.85 3.21 2.14 4.14 2.78m5.37 3.09c6.53 2.1-3.2-2.58 0 0m27.5 16.65c.08-1.3-.9 1.11 0 0m2.82 1.19c1.51-1.46.06 2.33 2.5-.36c.03-1.92-.07-3.06-2.8-.72c-.75.42-1.09 2.19.3 1.08M31.65 76.22c-.47-1.82-3.25-1.81 0 0m3.01 1.98c-1.12-1.86-4-1.68 0 0m17.17 10.35c1.68 1.49 7.7 1.09 2.03.18c-.83-1.24-5.32-.94-2.03-.18m23.6 14.57c2.57-2.16-2.5.97 0 0m5.36 3.69c.02-.69-1.11.3 0 0m.01-.97c2.86-3.03-2.77.18 0 0M24.22 70.01c-2.43-3.47-1.51-5.03-3.86-7.87c-.45-2.17-4.03-7.09-1.85-1.88c1.99 3.05 2.58 7.77 5.71 9.75m55.68 34.87c5.26-3.4-2.15-1.48 0 0m4.01 1.57c2.64-2.26-1.66-.47 0 0M30.75 72.38c.76-1.12-1.94-.14 0 0m52.33 32.99c2.55-1.64-.59-1.39-.46.15zM48.5 83.58c-.09-1.11-1.35.09 0 0m2.14 1.23c-.69-1.38-1.05.21 0 0m36.53 21.67c3.27-2.36-1.98-.45-.68.45zm-1.26-.6c2.67-2.23-2.8.99 0 0m6.39 4.25c1.79-1.19-2.17-.38 0 0M32.39 71.57c2.39.54 9.56 5.89 5.33.37c-2.17-.64-.87-5.94-3.08-5c1.48 2.48 1.22 3.53-1.9 1.97c-3.91-1.91-2.2.94-1.43 1.73c-1.04.25 1.39.91 1.08.93m-10.9-8.61c.43-1.77-3.95-9.75-2.07-4c.68 1.21.61 3.49 2.07 4M41.5 75.3c-1.23-1.03-.06-.15 0 0m3.03.71c0-1.88-3.35-.77 0 0m26.3 16.57c-.5-1.28-1.98-.02 0 0m1.26.93c-.18-.72-.72.14 0 0m10.43 6.56c1-.74-1.25-.09 0 0M26.93 64.35c2.87-1.11-3.07-.79 0 0m41.59 26.2c-.04-1.86-1.83.46 0 0M25.8 61.71c1.84-.62-1.71-.41 0 0m5.34 2.59c-.03-.61-.56.23 0 0m65.22 39.99c2.37-.48 7.77 1.21 8.64-.63c-2.88-.07-9.95-2.03-10.28.46l.63.1zM32.84 64.73c.05-1.88-1.46-.07 0 0m-14.05-9.75c-.64-3.58-2.43-.54 0 0m3.35.84c.04-1.15-3.07-1.03 0 0m1.91.94c-.55-.44-.43.57 0 0m12.06 7.73c.57-.52-1.35-.38 0 0m-13.33-9.85c-.33-2.71-3.88-.4 0 0m-6.87-4.46c-.1-1.25-.67.47 0 0m1.02-.77c-.17-1.48-.88.19 0 0m5.65 3.37c2.39-.94-4.35-1.94-.49-.18zm75.59 46.69c1.53-1.4-1.94-.43 0 0m9.13 4.74c.61-1.81-1.54.23 0 0M23.15 49.82c.26-1.75-1.89.35 0 0m-8.03-5.38c-.43-2.47-.37-6.82 3.76-5.35c-5.51 1.1 3.82 6.85 2.64 2.31c2.32.11 4.53-1.37 3.32.88c4.57-.5 7.73-4.46 12.14-3.91c3.44-.46 7.19-.8 10.89-2.18c3.04-.22 5.97-3.5 4.31-5.44c-4.15-.35-8.5.17-13.08 1.08c-5.08 1.06-9.7 3.06-14.83 3.93c-5 .67 1 1.85-.43 2.11c-2.61.9 3.11 1.52-.34 2.47c-2.13-.41-4.35-1.14-3.44-3.38c-4.79.62-9 2.61-5.21 7.48zm11.54-5.88c1.12-4.14 6.01 3.4 1.84.55c-.5-.38-1.32-.68-1.84-.55m.22-2.01c1.62-1.2.86.68 0 0m2.06.04c.15-1.9 4.71 1.01.75.68zm2.81-1.14c1.03-1.2.3 1.07 0 0m.72-.48c1.71-2.06 9.69-1.31 3.85-.2c-1.56-1.18-2.76.7-3.85.2m10.42-1.6c-.26-5.62 5.18 1.99 0 0m2.96-.02c1.08-2.83 4.2-1.14.5-.57c.08.3-.11 1.46-.5.57M21.99 48.37c3.23-1.98-3.43-1.72 0 0m2.39.66c1.13-1.2-2.46-.49 0 0m-7.04-4.99c1.85-1.42-2.18-.54 0 0m95.35 59.65c.05-1.65-1.41.74 0 0M103 97.08c.28-1.9-1.24.16 0 0m12.36 7.25c2.58.01 7.82-.8 2.2-.8c-.88.13-5.13.11-2.2.8M26.48 47.87c2.09-.14 3.27-2.3-.41-2.18c-5.69-.59 5.02 1.95-.73 1.22c-.77.51 1.09 1.1 1.14.96m1.84.93c-.22-1.34-.65.71 0 0m2.18-5.82c.9-1.12-1.26-.3 0 0m-6.95-11.6c3.73-1.27 8.82-2.69 10.58.62c-1.79-2.15-.72-4.28.97-1.12c2.39 3.19 3.59-1.45 2.03-2.52c1.77 2.2 3.79 3.24 1.19.14c2.83-3.4-5.66.45-7.59.41c-.92.41-9.58 2.2-7.18 2.47m2.19-4.18c2.13-1.6 7.35.96 4-1.59c-.33-.3-7.35 1.93-4 1.59m7.75.32c2.49.06-1.07-3.34 1.89-1.8c-.49-1.59-3.45-1.89-4.9-2.52c-.82 1.45 1.66 4.34 3.01 4.32m-6.39-7.04c.86-1.16-1.51.6 0 0m3.16.76c4.01-.53-1.02-1.72-.81-.04zm-5.91-4.62c-2.82-3.69 5.31.62 2.44-3.24c-2.41-1.92-4.73 2.16-2.44 3.24m36.21 19.5c1.29-2.29-5.34-3.09-.87-.81c.42.14.32.97.87.81" />
          </svg>
            )
          },
          
          {
            skillName: "Django",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons" 
                    viewBox="0 0 256 256">
            <rect width="256" height="256" fill="#092e20" rx="28" />
            <path fill="#fffffd" d="M186.377 94.198v66.226c0 22.82-1.67 33.764-6.678 43.225c-4.639 9.092-10.761 14.842-23.375 21.15l-26.53-12.615c12.616-5.936 18.738-11.13 22.633-19.11c4.082-8.161 5.382-17.623 5.382-42.481V94.198zm-45.449-44.12v132.239c-14.655 2.782-25.415 3.895-37.102 3.895c-34.877 0-53.057-15.767-53.057-46.007c0-29.126 19.294-48.047 49.16-48.047c4.638 0 8.163.37 12.43 1.483V50.08zm-38.215 65.082c-14.47 0-22.819 8.905-22.819 24.487c0 15.214 7.978 23.561 22.634 23.561c3.152 0 5.75-.185 9.831-.74v-45.825c-3.339-1.112-6.121-1.483-9.646-1.483m83.664-64.93v29.312h-28.568V50.231z" />
          </svg>
            )
          },

          // {
          //   skillName: "AWS",
          //   fontAwesomeClassname: "simple-icons:amazonaws",
          //   style: {
          //     color: "#FF9900",
          //   },
          // },
          // {
          //   skillName: "Netlify",
          //   fontAwesomeClassname: "simple-icons:netlify",
          //   style: {
          //     color: "#38AFBB",
          //   },
          // },
          // {
          //   skillName: "Heroku",
          //   fontAwesomeClassname: "simple-icons:heroku",
          //   style: {
          //     color: "#6863A6",
          //   },
          // },
          
          {
            skillName: "Firebase",
            svg: (<svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="4em" 
                    height="4em" 
                    className="icons"
                    viewBox="0 0 128 128">
              <path fill="#ffa000" d="M17.474 103.276L33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39l6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714z" />
              <path fill="#f57c00" d="M71.903 64.005L54.955 31.913l-37.481 71.363Z" />
              <path fill="#ffca28" d="M110.577 103.276L98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.714l-76.112 76.243l42.115 23.618a8.73 8.73 0 0 0 8.51 0l42.478-23.618Z" />
              <path fill="#fff" fill-opacity="0.2" d="M98.51 28.604a2.91 2.91 0 0 0-1.984-2.286a2.91 2.91 0 0 0-2.94.713L78.479 42.178L66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.91 2.91 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058l.415.204l75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003l.116-.073zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.91 2.91 0 0 1 3.057 1.495l16.292 30.39l6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41L17.61 103.138Z" />
              <path fill="#a52714" d="M68.099 126.18a8.73 8.73 0 0 1-8.51 0l-42.015-23.55l-.102.647l42.115 23.61a8.73 8.73 0 0 0 8.51 0l42.48-23.61l-.11-.67l-42.37 23.575z" opacity="0.2" />
            </svg>
            ),
          },

          // {
          //   skillName: "PostgreSQL",
          //   fontAwesomeClassname: "simple-icons:postgresql",
          //   style: {
          //     color: "#336791",
          //   },
          // },
          // {
          //   skillName: "MongoDB",
          //   fontAwesomeClassname: "simple-icons:mongodb",
          //   style: {
          //     color: "#47A248",
          //   },
          // },
          // {
          //   skillName: "Docker",
          //   fontAwesomeClassname: "simple-icons:docker",
          //   style: {
          //     color: "#1488C6",
          //   },
          // },
          // {
          //   skillName: "GitHub Actions",
          //   fontAwesomeClassname: "simple-icons:githubactions",
          //   style: {
          //     color: "#5b77ef",
          //   },
          // },
        ],
        projects: [
          {
            projectname: "Tetris Clone",
            projectlink: "https://github.com/QuadlcorE/Tetris-Clone",
            demolink: "",
            about: "The **Tetris Clone** is a Python game built with Pygame, featuring piece rotation, grid collision detection, and real-time scoring. It showcases game development skills and enhances understanding of data structures and algorithms through practical applications.",
            projectimage: TetrisClone,
            technologies: [
              "Python",
            ]
          }, 
          {
            projectname: "Gamepwanet",
            projectlink: "https://github.com/QuadlcorE/Gamepwanet",
            demolink: "",
            about: "",
            projectimage: Gamepwanet,
            technologies: [
              "Python",
              "Flask",
              "HTML5",
              "CSS3",
            ]
          },
        ],
    },
    ],
  };

export {
    skills
}