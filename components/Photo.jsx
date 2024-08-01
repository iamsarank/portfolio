"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.3, ease: "easeIn" },
                }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.4, duration: 0.3, ease: "easeInOut" },
                    }}
                    className="w-[268px] h-[268px] xl:w-[358px] xl:h-[358px] mix-blend-lighten">
                    <Image src='/assets/profile1.png' priority quality={100} fill alt=""
                        className="object-contain" />
                    <motion.svg
                        className="w-[330px] xl:w-[456px] h-[330px] xl:h-[456px] absolute top-[-25px] xl:top-[-45px] left-[-30px] xl:left-[-45px]"
                        fill="transparent"
                        viewBox="0 0 506 506"
                        xmlns="http://www.w3.org/2000/svg">
                        <motion.circle
                            cx="253"
                            cy="253"
                            r="200"
                            stroke="#0096FF"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ strokeDasharray: "24 10 0 0" }}
                            animate={{
                                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                                rotate: [120, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo