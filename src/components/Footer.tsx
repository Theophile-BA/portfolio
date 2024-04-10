'use client'

import { montserrat } from '@/font/font'

export default function Footer() {
    return (
        <>
            <div
                className={`${montserrat.className} flex justify-between fixed bottom-0 w-full bg-cyan-900 py-4 md:px-2 rounded-lg`}
            >
                <ul className="flex">
                    <li className="ml-5">
                        <a
                            href="https://github.com/Theophile-BA/"
                            className="flex items-center space-x-3 hover:text-yellow-300 transition"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-5"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span>Github</span>
                        </a>
                    </li>
                    <li className="ml-5">
                        <a
                            href="https://www.linkedin.com/in/theophilebonifaceachille/"
                            className="flex items-center space-x-3 hover:text-yellow-300 transition"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-linkedin"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li className="ml-5">
                        <a
                            href="https://discord.gg/kxZjbhb"
                            className="flex items-center space-x-3 hover:text-yellow-300 transition"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"
                                ></path>
                            </svg>
                            <span>Discord</span>
                        </a>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="ml-5">
                        <a
                            href="mailto:contact.theophileboniface@gmail.com"
                            className="flex items-center space-x-3 hover:text-yellow-300 transition"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-5"
                                viewBox="0 0 54.1 54.1"
                            >
                                <path d="M14.241,18.4c3.754,2.568,7.761,4.558,11.872,6.464c6.938-2.519,13.185-5.886,19.438-9.408 c2.351-1.325,4.713-2.664,7.107-3.993c-2.977-2.531-11.679-1.219-14.154-1.219c-7.089,0.01-14.176,0-21.275-0.01 c-2.05-0.122-4.19-0.174-6.189,0.01H8.896c-1.436,0.007-3.418-0.117-5.006,0.408c2.233,1.421,4.267,3.08,6.326,4.719 C11.526,16.413,12.848,17.446,14.241,18.4z"></path>{' '}
                                <path d="M11.406,20.105c-3.33-2.417-6.32-5.187-9.86-7.298c-0.617,1.664-0.282,3.875-0.492,5.422 c-0.009,0.061,0.011,0.112,0.011,0.163c-0.643,2.744-0.643,5.752-0.715,8.404c-0.073,2.57-0.613,6.271-0.188,9.468 c-0.039,1.539-0.054,3.155,0.283,4.508c6.607-5.211,13.631-10.385,20.712-14.902C17.772,24.189,14.505,22.354,11.406,20.105z"></path>{' '}
                                <path d="M53.884,20.758c0.112-2.091,0.399-4.383,0.044-6.505c-6.632,3.681-12.99,7.452-19.807,10.593 c3.883,3.246,7.842,6.352,11.729,9.555c1.641,1.352,3.268,2.725,4.871,4.133c0.581,0.509,1.155,1.027,1.728,1.548 c0.176-0.348,0.338-0.713,0.465-1.12c0.715-2.251,0.427-4.944,0.251-7.444c0.023-0.549,0.049-1.101,0.075-1.655 C53.437,26.83,53.725,23.806,53.884,20.758z"></path>{' '}
                                <path d="M31.06,26.188c-1.508,0.635-3.035,1.249-4.607,1.808c-0.579,0.206-1.054,0.062-1.38-0.254 c-0.244-0.113-0.488-0.229-0.731-0.343c-0.094,0.099-0.197,0.192-0.327,0.273C16.54,32.346,9.06,37.833,2.109,43.331 c0.608,0.388,1.395,0.623,2.427,0.635c4.545,0.055,9.098,0.021,13.65-0.022C26.056,44.156,33.94,44,41.808,44.185 c3.041,0.069,6.359-0.134,8.658-1.776c-6.157-5.604-12.762-10.553-19.125-15.911C31.224,26.4,31.137,26.295,31.06,26.188z"></path>
                            </svg>
                            <span>contact.theophileboniface@gmail.com</span>
                        </a>
                    </li>
                    <li className="ml-5">
                        <a
                            href="tel:+33668312485"
                            className="flex items-center space-x-3 hover:text-yellow-300 transition"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"></path>{' '}
                                <path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"></path>{' '}
                                <path d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z"></path>{' '}
                            </svg>
                            <span>(+33) 6 68 31 24 85</span>
                        </a>
                    </li>
                </ul>
                <p className="hover:text-yellow-300">
                    <span className="text-red-500 mr-1"> &hearts;</span>
                    Dev with love by Tayphi
                    <span className="text-red-500"> &hearts;</span>
                </p>
            </div>
        </>
    )
}
