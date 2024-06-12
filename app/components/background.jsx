'use client'

const background = () => {
  return (
    <div
    className="w-full h-full bg-zinc-800 fixed z-[2]"
    >
      <div className="absolute top-0 w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold ">
        Documents
      </div>
      <h1
        className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] text-zinc-900 font-semibold tracking-tighter leading-none ">
        Docs.
      </h1>
    </div>
  )
}

export default background
