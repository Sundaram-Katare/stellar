"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CodeEditor from "../../components/CodeEditor";
import ReviewResult from "../../components/ReviewResult";

export default function ReviewPage() {
    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [result, setResult] = useState(null);
    const [rewritten, setRewritten] = useState("");
    const [loading, setLoading] = useState(false);

    async function submit() {
        setLoading(true);
        const res = await fetch("/api/review", {
            method: "POST",
            body: JSON.stringify({ code, language }),
        });
        const data = await res.json();
        setLoading(false);
        setResult(data);
        setRewritten(data.rewrittenCode);
    }

    return (
        <>
            <div className="flex flex-col min-h-[60vh] font-jersey bg-transparent mt-8  justify-center">

                <div className="relative w-fit h-fit rounded-xl border border-white/10 bg-transparent backdrop-blur-md p-6 transition-all duration-300 hover:border-pink-500/60 my-36 shadow-[0_0_40px_-10px_rgba(236,72,153,0.6)]">
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-70" />

                    <h1 className="text-6xl text-white text-center ">Review <span className="text-pink-400">Code</span></h1>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                    <div className="h-full">
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option className="bg-black" value="javascript">JavaScript</option>
                            <option className="bg-black" value="typescript">TypeScript</option>
                            <option className="bg-black" value="python">Python</option>
                            <option className="bg-black" value="Java">Java</option>
                            <option className="bg-black" value="CPP">C++</option>
                        </select>

                        <CodeEditor
                            value={code}
                            onChange={setCode}
                            language={language}
                        />

                        <div className="flex justify-center items-center ">
                            <motion.button
                                onClick={submit} className="mt-4 btn bg-gray-200 text-xl text-black rounded-lg px-2 py-1 hover:scale-[1.05] hover:bg-gray-100 transition-all cursor-pointer ">
                                Review Code
                            </motion.button>
                        </div>
                    </div>

                    <div>
                        {result ? <ReviewResult result={result} /> :
                            <>
                                {
                                    loading ? (<> <div className="h-[31rem] max-h-[32rem] border-2-black rounded-xl overflow-scroll p-4 bg-gray-300/80 rounded-2xl flex justify-center items-center m-6">
                                        <img src="https://themesbrand.com/drezon/layouts/vertical/assets/images/maintenance.gif" alt="" className="" />
                                    </div></>) : (<><div className="h-[31rem] max-h-[32rem] border-2-black rounded-xl overflow-scroll p-4 bg-gray-300/80 rounded-2xl flex justify-center items-center m-6">
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/044/619/868/small/detailed-cartoon-astronaut-floating-in-zero-gravity-helmet-reflecting-the-vastness-of-space-and-stars-png.png" alt="" className="" />
                                    </div></>)
                                }
                            </>}
                    </div>

                    {rewritten && (
                        <div className="col-span-2">
                            <h2 className="text-4xl font-regulat text-center ">Rewritten Code</h2>
                            <CodeEditor value={rewritten} language={language} onChange={() => { }} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
