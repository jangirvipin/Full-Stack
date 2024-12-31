 const b="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1728219838~exp=1728223438~hmac=1241f3f3b454490bcc75bdc6800f9c9a0fb96a1bc76f18a4ee410fef246f5a49&w=740"
 const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. "
export default function Banner(){
    return(
        <>
        <div className="max-w-screen-2xl container mx-auto flex  md:px-20 px-4 flex-col md:flex-row my-10">

            <div className=" md:w-1/2 md:mt-32 mt-12 order-2 md:order-1">
            <div className="space-y-12">
            <h1 className="text-4xl font-bold">
                    Hello, welcome here to learn learn something new {" "}
                    <span className="text-pink-500">
                         everyday !!!
                    </span>
                </h1>
                <p className="text-xl">{a}</p>

                <label className="input input-bordered flex items-center gap-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
             d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
             <path
             d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
             </svg>
         <input type="text" className="grow" placeholder="Email" />
        </label>
      
            </div>
            <button className="btn btn-secondary mt-6">Secondary</button>

            
            </div>


            <div className="md:w-1/2 order-1">
                <img className="w-92 h-92" src={b}></img>
            </div>
        </div>
        </>
    )
}